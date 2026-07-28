(() => {
  const places = window.TRIPBOOK_PLACES || [];
  const saved = () => new Set(JSON.parse(localStorage.getItem('tripbookSaved') || '[]'));
  const setSaved = set => localStorage.setItem('tripbookSaved', JSON.stringify([...set]));
  const esc = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const mapUrl = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
  const saveButton = place => `<button class="heart" data-save="${esc(place.id)}" aria-label="Save ${esc(place.name)}">♡</button>`;
  const wireSaves = scope => scope.querySelectorAll('[data-save]').forEach(button => {
    const place = places.find(item => item.id === button.dataset.save); if (!place) return;
    const update = () => { const list = saved(), active = list.has(place.id); button.classList.toggle('saved', active); button.textContent = active ? '♥' : '♡'; };
    update(); button.addEventListener('click', () => { const list = saved(); list.has(place.id) ? list.delete(place.id) : list.add(place.id); setSaved(list); update(); });
  });
  const card = place => `<article class="recommendation-card"><a class="place-card-link" href="place.html?id=${encodeURIComponent(place.id)}"><div class="recommendation-visual has-photo"><img loading="lazy" decoding="async" src="${esc(place.image)}" alt="${esc(place.name)}"></div></a><div class="recommendation-body"><a class="place-card-link" href="place.html?id=${encodeURIComponent(place.id)}"><div><small>${esc(place.distance)} · ${esc(place.scooter)}</small><h2>${esc(place.name)}</h2><p>${esc(place.description)}</p></div></a>${saveButton(place)}</div></article>`;
  const indexCard = place => { const travel = place.scooter.replace(/^Approx\.\s*/, '').replace(/by scooter/, 'away'); return `<article class="place-index-card"><a class="place-index-image" href="place.html?id=${encodeURIComponent(place.id)}"><img loading="lazy" decoding="async" src="${esc(place.image)}" alt="${esc(place.name)}"></a><div class="place-index-copy"><a href="place.html?id=${encodeURIComponent(place.id)}"><h2>${esc(place.name)}</h2></a><p>${esc(place.tag)}</p><div class="place-index-foot"><span>🛵 ${esc(travel)}</span>${saveButton(place)}</div></div></article>`; };
  const category = document.body.dataset.category;
  if (category) { const config = window.TRIPBOOK_CATEGORIES[category]; if (!config) return; document.title = `${config.title} — Bali Tripbook`; document.getElementById('categoryTitle').textContent = config.title; document.getElementById('categoryIntro').textContent = config.intro; document.getElementById('categoryList').innerHTML = places.filter(place => place.category === category).map(card).join(''); wireSaves(document); }
  const allPlaces = document.getElementById('allPlaces'); if (allPlaces) { allPlaces.innerHTML = places.map(indexCard).join(''); wireSaves(allPlaces); }
  const detailRoot = document.getElementById('placeDetail');
  if (!detailRoot) return;
  document.body.classList.add('place-page');
  const id = new URLSearchParams(location.search).get('id'); const place = places.find(item => item.id === id);
  if (!place) { location.replace('places.html'); return; }
  document.title = `${place.name} — Bali Tripbook`;
  const gallery = Array.from({length:4}, (_, index) => `<img src="${esc(place.image)}" alt="${esc(place.name)}" loading="lazy" style="object-position:${index % 2 ? '70%' : 'center'}">`).join('');
  detailRoot.innerHTML = `<div class="detail-hero"><img src="${esc(place.image)}" alt="${esc(place.name)}" fetchpriority="high"><div class="detail-top-actions"><a href="places.html" aria-label="Back to places">‹</a><div><button data-share-trip aria-label="Share ${esc(place.name)}">⇧</button>${saveButton(place)}</div></div></div><section class="place-detail-sheet"><h1>${esc(place.name)}</h1><p class="detail-tags">${esc(place.tag)}</p><p class="detail-location">⌖ ${esc(place.area)}, Bali <strong>➤ ${esc(place.scooter.replace(/^Approx\.\s*/, ''))}</strong></p><div class="detail-actions">${saveButton(place)}<button>▣<span>Add to itinerary</span></button><button>▤<span>Add note</span></button><a href="${mapUrl(place.maps)}" target="_blank" rel="noopener">◎<span>Maps</span></a></div><p class="place-summary">${esc(place.description)}</p><section class="detail-gallery"><div class="detail-section-heading"><h2>Photos</h2><span>See all ›</span></div><div class="photo-strip">${gallery}</div></section><section class="detail-info"><h2>Details</h2><div class="detail-row"><span>◷ Opening hours</span><strong>${esc(place.hours)}</strong></div><div class="detail-row"><span>＄ Price range</span><strong>${esc(place.price)}</strong></div><div class="detail-row"><span>♜ Category</span><strong>${esc(place.tag)}</strong></div><div class="detail-row"><span>⌖ Distance</span><strong>${esc(place.distance)}</strong></div></section></section>`;
  wireSaves(detailRoot);
})();
