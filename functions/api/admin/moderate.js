// Admin API (password protected): list reviews and approve / reject / delete
const json = (d, s = 200) =>
    new Response(JSON.stringify(d), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  
  async function authed(request, env) {
    const t = (request.headers.get('Authorization') || '').replace(/^Bearer /, '');
    if (!env.ADMIN_PASSWORD || !t) return false;
    const enc = new TextEncoder();
    const [a, b] = await Promise.all([
      crypto.subtle.digest('SHA-256', enc.encode(t)),
      crypto.subtle.digest('SHA-256', enc.encode(env.ADMIN_PASSWORD)),
    ]);
    return crypto.subtle.timingSafeEqual(a, b);
  }
  
  export async function onRequestGet({ request, env }) {
    if (!(await authed(request, env))) return json({ error: 'Unauthorized' }, 401);
    let s = new URL(request.url).searchParams.get('status') || 'pending';
    if (!['pending', 'approved', 'rejected', 'all'].includes(s)) s = 'pending';
    const { results } = await env.DB.prepare(
      "SELECT id, name, rating, comment, status, created_at FROM reviews WHERE (?1 = 'all' OR status = ?1) ORDER BY created_at DESC, id DESC LIMIT 200"
    ).bind(s).all();
    const p = await env.DB.prepare("SELECT COUNT(*) AS c FROM reviews WHERE status = 'pending'").first();
    return json({ reviews: results, pending: p.c });
  }
  
  export async function onRequestPost({ request, env }) {
    if (!(await authed(request, env))) return json({ error: 'Unauthorized' }, 401);
    let b;
    try { b = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
    const id = Number(b.id);
    if (!Number.isInteger(id)) return json({ error: 'Bad id' }, 400);
    if (b.action === 'approve') await env.DB.prepare("UPDATE reviews SET status = 'approved' WHERE id = ?1").bind(id).run();
    else if (b.action === 'reject') await env.DB.prepare("UPDATE reviews SET status = 'rejected' WHERE id = ?1").bind(id).run();
    else if (b.action === 'delete') await env.DB.prepare('DELETE FROM reviews WHERE id = ?1').bind(id).run();
    else return json({ error: 'Bad action' }, 400);
    return json({ ok: true });
  }