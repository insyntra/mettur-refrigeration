// Public API: GET approved reviews, POST a new review (saved as "pending")
const json = (d, s = 200) =>
    new Response(JSON.stringify(d), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  
  async function sha(s) {
    const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(d)].map((x) => x.toString(16).padStart(2, '0')).join('');
  }
  
  export async function onRequestGet({ env }) {
    const { results } = await env.DB.prepare(
      "SELECT name, rating, comment, created_at FROM reviews WHERE status = 'approved' ORDER BY created_at DESC, id DESC LIMIT 50"
    ).all();
    const agg = await env.DB.prepare("SELECT COUNT(*) AS c, AVG(rating) AS a FROM reviews WHERE status = 'approved'").first();
    return json({ reviews: results, count: agg.c, average: agg.c ? Math.round(agg.a * 10) / 10 : 0 });
  }
  
  export async function onRequestPost({ request, env }) {
    const origin = request.headers.get('Origin');
    if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: 'Not allowed.' }, 403);
    let b;
    try { b = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
    if (b.company) return json({ ok: true }); // honeypot filled: pretend success, store nothing
    const name = String(b.name || '').trim().slice(0, 60);
    const comment = String(b.comment || '').trim().slice(0, 500);
    const rating = Number(b.rating);
    if (name.length < 2 || comment.length < 5 || !Number.isInteger(rating) || rating < 1 || rating > 5)
      return json({ error: 'Please fill in all fields.' }, 400);
    const ipHash = await sha((request.headers.get('CF-Connecting-IP') || '') + '|mettur-reviews');
    const recent = await env.DB.prepare(
      "SELECT COUNT(*) AS c FROM reviews WHERE ip_hash = ?1 AND created_at > datetime('now', '-1 hour')"
    ).bind(ipHash).first();
    if (recent.c >= 3) return json({ error: 'Too many reviews. Please try again later.' }, 429);
    await env.DB.prepare('INSERT INTO reviews (name, rating, comment, ip_hash) VALUES (?1, ?2, ?3, ?4)')
      .bind(name, rating, comment, ipHash).run();
    return json({ ok: true }, 201);
  }