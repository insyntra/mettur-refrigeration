/* Reviews on the Home page: shows approved reviews, sends new ones for approval */
(function () {
    var list = document.getElementById('rv-list'), sum = document.getElementById('rv-sum'), f = document.getElementById('rvf');
    if (!list || !f) return;
    var rating = 0, btns = f.querySelectorAll('.rs button');
  
    function stars(n) {
      var s = '';
      for (var i = 1; i <= 5; i++) s += '<svg class="i' + (i <= n ? ' on' : '') + '"><use href="#st"/></svg>';
      return '<div class="stars" role="img" aria-label="' + n + ' out of 5 stars">' + s + '</div>';
    }
    function render(d) {
      list.innerHTML = '';
      if (!d.reviews.length) {
        list.innerHTML = '<div class="empty">No reviews yet. Be the first to share your experience.</div>';
        return;
      }
      sum.textContent = d.average + ' out of 5 from ' + d.count + (d.count === 1 ? ' review' : ' reviews');
      d.reviews.forEach(function (v) {
        var c = document.createElement('article'); c.className = 'rcard';
        c.innerHTML = stars(v.rating);
        var p = document.createElement('p'); p.textContent = v.comment;
        var b = document.createElement('b'); b.textContent = v.name;
        var s = document.createElement('small');
        var dt = new Date(String(v.created_at).replace(' ', 'T') + 'Z');
        s.textContent = isNaN(dt) ? '' : '  ' + dt.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
        c.appendChild(p); c.appendChild(b); c.appendChild(s); list.appendChild(c);
      });
    }
    function load() {
      fetch('/api/reviews').then(function (r) { return r.json(); }).then(render)
        .catch(function () { list.innerHTML = '<div class="empty">No reviews yet. Be the first to share your experience.</div>'; });
    }
  
    btns.forEach(function (b) {
      b.onclick = function () {
        rating = +b.dataset.v;
        btns.forEach(function (x) { var on = +x.dataset.v <= rating; x.classList.toggle('on', on); x.setAttribute('aria-checked', +x.dataset.v === rating); });
      };
    });
  
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var errs = f.querySelectorAll('.err'), name = f.n.value.trim(), com = f.c.value.trim(), ok = true;
      errs[0].textContent = rating ? '' : 'Choose a star rating.';
      errs[1].textContent = name.length >= 2 ? '' : 'Enter your name.';
      errs[2].textContent = com.length >= 5 ? '' : 'Write a short review.';
      if (!rating || name.length < 2 || com.length < 5) return;
      var sb = f.querySelector('button[type=submit]'); sb.disabled = true;
      fetch('/api/reviews', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: name, rating: rating, comment: com, company: f.company.value })
      }).then(function (r) { return r.json().then(function (d) { return { s: r.status, d: d }; }); })
        .then(function (x) {
          var m = document.getElementById('rv-ok');
          if (x.s < 300) { f.reset(); rating = 0; btns.forEach(function (b) { b.classList.remove('on'); }); m.textContent = 'Thank you. Your review will appear on the site after it has been approved.'; }
          else m.textContent = x.d.error || 'Something went wrong. Please try again.';
          m.hidden = false;
        }).catch(function () { var m = document.getElementById('rv-ok'); m.textContent = 'Could not send. Please try again.'; m.hidden = false; })
        .then(function () { sb.disabled = false; });
    });
    load();
  })();