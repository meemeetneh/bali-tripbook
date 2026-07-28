const CACHE='tripbook-v0.6.23-remove-goldust';
const APP_SHELL=['./','./index.html','./places.html','./place.html','./breakfast.html','./coffee.html','./dinner.html','./yoga.html','./spa.html','./beaches.html','./beach-club.html','./wellness.html','./shopping.html','./nightlife.html','./villa.html','./itinerary.html','./picks.html','./hotels.html','./flights.html','./packing.html','./emergency.html','./documents.html','./settings.html','./about.html','./assets/site.css','./assets/type-tuning.css','./assets/airbnb-system.css','./assets/trip-tools.css','./assets/site.js','./assets/packing-page.js','./assets/picks-page.js','./assets/trip-data.js','./assets/itinerary-data.js','./assets/itinerary-page.js','./assets/place-pages.js','./assets/place-detail-format.js','./assets/fonts/airbnb-cereal-300.otf','./assets/fonts/airbnb-cereal-400.otf','./assets/fonts/airbnb-cereal-500.otf','./sensorium.jpg','./manifest.webmanifest'];
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
