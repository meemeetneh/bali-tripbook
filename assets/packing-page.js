(() => {
  const boxes=[...document.querySelectorAll('[data-pack]')];
  const progress=document.getElementById('packingProgress');
  const count=document.getElementById('packingCount');
  const bar=document.getElementById('packingBar');
  const key='tripbook-packing-v1';
  const saved=JSON.parse(localStorage.getItem(key)||'[]');
  const refresh=()=>{const checked=boxes.filter(box=>box.checked).length;const percent=Math.round((checked/boxes.length)*100);progress.textContent=`${percent}% packed`;count.textContent=`${checked} / ${boxes.length}`;bar.style.width=`${percent}%`;localStorage.setItem(key,JSON.stringify(boxes.map(box=>box.checked)));};
  boxes.forEach((box,index)=>{box.checked=Boolean(saved[index]);box.addEventListener('change',refresh)});refresh();
})();
