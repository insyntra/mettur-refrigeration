/* Mettur Tech Refrigeration - shared script */
(function () {
  var PH1 = '8610654644', PH2 = '9751766513', WA = '918610654644';
  var IG = 'https://www.instagram.com/mettur_tech_refrigeration93/';

  function ic(n) { return '<svg class="i"><use href="#' + n + '"/></svg>'; }

  var sprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></symbol>' +
    '<symbol id="wa" viewBox="0 0 24 24"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.5L3 21z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2.2-1-1 .9a4 4 0 0 1-2-2l.9-1-1-2.2L9 8.5z"/></symbol>' +
    '<symbol id="ac" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="8" rx="2"/><path d="M7 16c0 2 1 3 0 5M12 16c0 2 1 3 0 5M17 16c0 2 1 3 0 5"/></symbol>' +
    '<symbol id="fr" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12M9 5.5v2M9 13v3"/></symbol>' +
    '<symbol id="wm" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4.5"/><path d="M7.5 5.5h.01M11 5.5h.01"/></symbol>' +
    '<symbol id="wr" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></symbol>' +
    '<symbol id="pin" viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></symbol>' +
    '<symbol id="ck" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>' +
    '<symbol id="st" viewBox="0 0 24 24"><path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.7l6.2-.9z"/></symbol>' +
    '<symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></symbol>' +
    '<symbol id="sh" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></symbol>' +
    '<symbol id="ar" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></symbol>' +
    '</defs></svg>';

  var header =
    '<div class="w nav">' +
    '<a class="logo" href="/"><img src="/images/logo.jpeg" width="56" height="56" alt="Mettur Tech Refrigeration logo"><span>Mettur Tech<br>Refrigeration</span></a>' +
    '<nav id="menu" aria-label="Main"><ul>' +
    '<li><a href="/">Home</a></li>' +
    '<li><a href="/#about">About Us</a></li>' +
    '<li><a href="/#services">Services</a></li>' +
    '<li><a href="/#shop">Our Shop</a></li>' +
    '<li><a href="/#areas">Service Areas</a></li>' +
    '<li><a href="/#contact">Contact Us</a></li></ul></nav>' +
    '<a class="btn p hc" href="tel:+91' + PH1 + '">' + ic('phone') + 'Call now</a>' +
    '<button class="bg" id="bg" type="button" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><svg class="i"><path class="o" d="M4 7h16M4 12h16M4 17h16"/><path class="x" d="M6 6l12 12M18 6L6 18"/></svg></button>' +
    '</div>';

  var footer =
    '<div class="w"><div><img src="/images/logo.jpeg" width="84" height="84" alt="Mettur Tech Refrigeration logo">' +
    '<p>AC, refrigerator and washing machine service and repair in Mettur and nearby areas.</p></div>' +
    '<div><b>Quick links</b><a href="/#services">Services</a><a href="/#about">About Us</a><a href="/#shop">Our Shop</a><a href="/#areas">Service Areas</a><a href="/#contact">Contact Us</a></div>' +
    '<div><b>Contact</b><a href="tel:+91' + PH1 + '">' + PH1 + '</a><a href="tel:+91' + PH2 + '">' + PH2 + '</a><a href="https://wa.me/' + WA + '">WhatsApp</a><a href="' + IG + '" rel="noopener" target="_blank">Instagram</a></div>' +
    '<div><b>Service areas</b><span style="display:block;padding:3px 0">Mettur</span><span style="display:block;padding:3px 0">Mecheri</span><span style="display:block;padding:3px 0">Kolathur</span><span style="display:block;padding:3px 0">Kunjandiyur</span></div>' +
    '<p class="copy">&copy; ' + new Date().getFullYear() + ' Mettur Tech Refrigeration. All rights reserved.</p></div>';

  var bar = '<a class="btn p" href="tel:+91' + PH1 + '">' + ic('phone') + 'Call now</a><a class="btn s" href="https://wa.me/' + WA + '">' + ic('wa') + 'WhatsApp</a>';

  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    document.body.insertAdjacentHTML('afterbegin', sprite);
    var h = document.getElementById('site-header'), f = document.getElementById('site-footer');
    if (h) h.innerHTML = header;
    if (f) f.innerHTML = footer;
    var b = document.createElement('div'); b.className = 'bar'; b.innerHTML = bar; document.body.appendChild(b);

    // highlight the menu item for the section in view
    var links = [].slice.call(document.querySelectorAll('#menu a'));
    function spy() {
      var y = window.scrollY + 140, cur = '/';
      ['services', 'about', 'shop', 'areas', 'contact'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = '/#' + id;
      });
      links.forEach(function (a) { a.toggleAttribute('aria-current', a.getAttribute('href') === cur); });
    }
    if (document.getElementById('services')) { window.addEventListener('scroll', spy, { passive: true }); spy(); }

    // mobile menu
    var hd = document.getElementById('site-header'), bg = document.getElementById('bg');
    function tm(o) { hd.classList.toggle('open', o); bg.setAttribute('aria-expanded', o); bg.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); }
    if (bg) {
      bg.onclick = function () { tm(!hd.classList.contains('open')); };
      document.getElementById('menu').addEventListener('click', function (e) { if (e.target.closest('a')) tm(false); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') tm(false); });
    }

    // videos: <div class="vid" data-mp4="/videos/file.mp4" data-title="..."></div>
    // first frame is used as the thumbnail; the video loads fully only when played
    document.querySelectorAll('.vid').forEach(function (v) {
      if (v.closest('[hidden]')) return;
      var t = v.dataset.title || 'Play video';
      var vid = document.createElement('video');
      vid.src = v.dataset.mp4 + '#t=0.5'; vid.preload = 'metadata'; vid.playsInline = true; vid.muted = true;
      vid.setAttribute('aria-label', t);
      var btn = document.createElement('button');
      btn.type = 'button'; btn.setAttribute('aria-label', 'Play: ' + t);
      btn.innerHTML = '<span>' + ic('play') + '</span>';
      v.appendChild(vid); v.appendChild(btn);
      btn.onclick = function () {
        btn.remove(); vid.muted = false; vid.controls = true; vid.preload = 'auto'; vid.play();
      };
    });

    // gallery lightbox
    var items = document.querySelectorAll('.gi');
    if (items.length) {
      var d = document.createElement('dialog');
      d.innerHTML = '<img alt=""><p><span></span><button class="btn s" type="button" style="min-height:38px;padding:0 16px">Close</button></p>';
      document.body.appendChild(d);
      d.querySelector('button').onclick = function () { d.close(); };
      d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
      items.forEach(function (g) {
        g.onclick = function () {
          var im = g.querySelector('img');
          d.querySelector('img').src = im.currentSrc || im.src;
          d.querySelector('img').alt = im.alt;
          d.querySelector('span').textContent = g.dataset.t || im.alt;
          d.showModal();
        };
      });
    }

    // enquiry form -> opens WhatsApp with details filled in
    var form = document.getElementById('enq');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (form.company && form.company.value) return; // spam trap
        var ok = true, n = form.n.value.trim(), p = form.p.value.replace(/\s/g, '');
        var pv = /^[6-9]\d{9}$/.test(p);
        form.n.nextElementSibling.textContent = n ? '' : 'Enter your name.';
        form.p.nextElementSibling.textContent = pv ? '' : 'Enter a 10-digit mobile number.';
        if (!n || !pv) return;
        var msg = 'Service request%0AName: ' + encodeURIComponent(n) + '%0APhone: ' + p +
          '%0ALocation: ' + encodeURIComponent(form.l.value) + '%0AAppliance: ' + encodeURIComponent(form.a.value) +
          '%0AIssue: ' + encodeURIComponent(form.i.value.trim() || '-');
        window.open('https://wa.me/' + WA + '?text=' + msg, '_blank', 'noopener');
        document.getElementById('ok').hidden = false;
      });
    }
  });
})();