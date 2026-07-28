(() => {
  const data = window.TRIPBOOK_ITINERARY;
  const strip = document.getElementById('dayStrip');
  const title = document.getElementById('selectedDayTitle');
  const timeline = document.getElementById('itineraryTimeline');
  if (!data || !strip || !title || !timeline) return;

  const dateParts = value => new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).formatToParts(new Date(`${value}T00:00:00Z`));
  const part = (value, type) => dateParts(value).find(item => item.type === type).value;
  const escape = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  const itemInfo = item => {
    const match = item.match(/^(\d{1,2}:\d{2})\s+(.+)$/);
    const label = match ? match[2] : item;
    const lower = label.toLowerCase();
    if (lower.includes('talixo') || lower.includes('grabcar') || lower.includes('travel to dps')) return { time: match?.[1] || 'Travel', icon: '⌁', type: 'Transfer · GrabCar / Talixo' };
    if (lower.includes('airasia') || lower.includes('arrive dps') || lower.includes('arrive kul')) return { time: match?.[1] || 'Travel', icon: '✈', type: 'Flight / airport' };
    if (lower.includes('check in') || lower.includes('check out') || lower.includes('villa')) return { time: match?.[1] || 'Stay', icon: '⌂', type: 'Accommodation' };
    if (lower.includes('breakfast') || lower.includes('brunch')) return { time: match?.[1] || 'Plan', icon: '☕', type: 'Food & drink' };
    if (lower.includes('spa') || lower.includes('massage') || lower.includes('wellness') || lower.includes('yoga')) return { time: match?.[1] || 'Plan', icon: '✦', type: 'Wellness' };
    if (lower.includes('market') || lower.includes('bags') || lower.includes('supermarket')) return { time: match?.[1] || 'Plan', icon: '◌', type: 'Shopping' };
    if (lower.includes('beach') || lower.includes('atlas') || lower.includes('sunset')) return { time: match?.[1] || 'Plan', icon: '☀', type: 'Beach / sunset' };
    if (lower.includes('planning')) return { time: match?.[1] || 'Open', icon: '○', type: 'Still planning' };
    return { time: match?.[1] || 'Plan', icon: '•', type: 'Itinerary item' };
  };

  function render(day) {
    title.textContent = `Day ${day.day} · ${day.title}`;
    strip.querySelectorAll('.day-chip').forEach(button => button.classList.toggle('active', Number(button.dataset.day) === day.day));
    timeline.innerHTML = day.items.map(item => {
      const info = itemInfo(item);
      return `<article class="timeline-item"><div class="activity-time">${escape(info.time)}</div><div class="timeline-copy"><div class="timeline-card"><div class="timeline-illustration" aria-hidden="true">${info.icon}</div><div><h3>${escape(info.time === item ? item : item.replace(/^\d{1,2}:\d{2}\s+/, ''))}</h3><div class="timeline-meta"><span>${escape(info.type)}</span></div></div><button class="activity-more" type="button" aria-label="More options for ${escape(item)}">⋮</button></div></div></article>`;
    }).join('');
  }

  strip.innerHTML = data.days.map(day => `<button class="day-chip" type="button" data-day="${day.day}"><span>${part(day.date, 'weekday')}</span><strong>${part(day.date, 'day')}</strong><small>${part(day.date, 'month')}</small></button>`).join('');
  strip.addEventListener('click', event => {
    const button = event.target.closest('[data-day]');
    if (button) render(data.days.find(day => day.day === Number(button.dataset.day)));
  });
  render(data.days[0]);
})();
