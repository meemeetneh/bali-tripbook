
(() => {
  const menu=document.getElementById('sideMenu'), backdrop=document.getElementById('menuBackdrop');
  const open=()=>{if(!menu)return;menu.classList.add('open');backdrop.classList.add('open');menu.setAttribute('aria-hidden','false')};
  const close=()=>{if(!menu)return;menu.classList.remove('open');backdrop.classList.remove('open');menu.setAttribute('aria-hidden','true')};
  document.getElementById('menuButton')?.addEventListener('click',open);
  document.getElementById('subMenuButton')?.addEventListener('click',open);
  document.getElementById('closeMenu')?.addEventListener('click',close);
  backdrop?.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
