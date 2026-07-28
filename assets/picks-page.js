(() => {
  const list=document.getElementById('picksFavourites');
  const buttons=[...document.querySelectorAll('[data-filter]')];
  const getSaved=()=>new Set(JSON.parse(localStorage.getItem('tripbookSaved')||'[]'));
  const setSaved=items=>localStorage.setItem('tripbookSaved',JSON.stringify([...items]));
  const esc=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const render=filter=>{
    const saved=getSaved();
    const places=(window.TRIPBOOK_PLACES||[]).filter(place=>saved.has(place.id)&&(filter==='all'||place.category===filter));
    if(!places.length){list.innerHTML='<div class="picks-favourites-empty"><i>♥</i><div><strong>No saved places yet</strong><p>Tap the heart on any place to keep it here.</p></div></div>';return;}
    list.innerHTML=places.map(place=>`<article class="pick-card"><a href="place.html?id=${encodeURIComponent(place.id)}"><img src="${esc(place.image)}" alt="${esc(place.name)}" loading="lazy"></a><div><a href="place.html?id=${encodeURIComponent(place.id)}"><h2>${esc(place.name)}</h2></a><p>${esc(place.tag)}</p><small>🛵 ${esc(place.scooter.replace(/^Approx\.\s*/,''))}</small></div><button data-remove="${esc(place.id)}" aria-label="Remove ${esc(place.name)}">♥</button></article>`).join('');
    list.querySelectorAll('[data-remove]').forEach(button=>button.addEventListener('click',()=>{const savedItems=getSaved();savedItems.delete(button.dataset.remove);setSaved(savedItems);render(filter);}));
  };
  buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(item=>item.classList.toggle('active',item===button));render(button.dataset.filter);}));
  render('all');
})();
