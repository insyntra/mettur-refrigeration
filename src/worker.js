import * as reviews from '../functions/api/reviews.js';
import * as moderate from '../functions/api/admin/moderate.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const handler =
      pathname === '/api/reviews' ? reviews :
      pathname === '/api/admin/moderate' ? moderate : null;
    if (!handler) return new Response('Not found', { status: 404 });
    const m = request.method;
    const fn = handler['onRequest' + m.charAt(0) + m.slice(1).toLowerCase()];
    if (!fn) return new Response('Method not allowed', { status: 405 });
    return fn({ request, env });
  },
};