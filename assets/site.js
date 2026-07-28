
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

document.body.classList.add('page-enter');
document.querySelectorAll('.check-panel input[type="checkbox"]').forEach((box,index)=>{
  const key=`tripbook-check-${location.pathname}-${index}`;
  box.checked=localStorage.getItem(key)==='1';
  box.addEventListener('change',()=>localStorage.setItem(key,box.checked?'1':'0'));
});
document.querySelectorAll('[data-share-trip]').forEach(button=>{
  button.addEventListener('click',async()=>{
    const data={title:'Bali Tripbook',text:'Our Bali trip plan',url:location.origin+location.pathname.replace(/[^/]+$/,'index.html')};
    try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(data.url);button.textContent='Link copied';}}catch(e){}
  });
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
let deferredInstall;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;document.getElementById('installBanner')?.classList.add('show');});
document.getElementById('installApp')?.addEventListener('click',async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;document.getElementById('installBanner')?.classList.remove('show');});
