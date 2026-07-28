const CACHE='tripbook-v0.6-type3';
const APP_SHELL=['./','./index.html','./places.html','./place.html','./breakfast.html','./coffee.html','./dinner.html','./yoga.html','./spa.html','./villa.html','./itinerary.html','./picks.html','./hotels.html','./flights.html','./packing.html','./emergency.html','./documents.html','./settings.html','./about.html','./assets/site.css','./assets/type-tuning.css','./assets/site.js','./assets/trip-data.js','./assets/place-pages.js','./assets/fonts/inter-300.ttf','./assets/fonts/inter-400.ttf','./assets/fonts/inter-500.ttf','./assets/fonts/inter-600.ttf','./assets/fonts/inter-700.ttf','./sensorium.jpg','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const request=event.request;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));return response;}).catch(()=>caches.match(request).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(request).then(hit=>{
    const update=fetch(request).then(response=>{if(response&&response.status<400){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}return response;});
    return hit||update.catch(()=>request.destination==='image'?new Response('',{status:504,statusText:'Offline'}):caches.match('./index.html'));
  }));
});
