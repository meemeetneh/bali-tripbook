/* Synced from data/tripbook-data.json. Keep confirmed facts and planning notes separate. */
window.TRIPBOOK_ITINERARY = {
  trip: { start: '2026-07-31', end: '2026-08-04', duration: '5 days / 4 nights', travellers: '2 adults', transport: ['GrabCar', 'GrabBike', 'Gojek'], noScooter: true },
  flights: [
    { type: 'outbound', airline: 'AirAsia', flight: 'AK368', date: '2026-07-31', from: 'KUL', to: 'DPS', departure: '12:50', arrival: '16:00', status: 'confirmed' },
    { type: 'return', airline: 'AirAsia', flight: 'AK369', date: '2026-08-04', from: 'DPS', to: 'KUL', departure: '16:40', arrival: '19:45', status: 'confirmed' }
  ],
  airportTransfer: { provider: 'Talixo', pickup: 'DPS Airport', destination: 'Anasera Villas Echo Beach Canggu', price: 'FREE', status: 'confirmed' },
  hotels: [
    { name: 'Anasera Villas Echo Beach Canggu', area: 'Pererenan / Canggu', checkIn: '2026-07-31', checkOut: '2026-08-02', room: 'One Bedroom Villa', total: 'MYR 814', status: 'confirmed' },
    { name: 'Lomo Boutique Hotel & Villas', area: 'Uluwatu', checkIn: '2026-08-02', checkOut: '2026-08-04', room: 'Junior Suite with Bathtub', status: 'confirmed', checkInTime: '14:00', checkOutTime: '12:30', amenities: ['Parking', 'Free WiFi', 'Coffee & tea', 'Drinking water'] }
  ],
  days: [
    { day: 1, date: '2026-07-31', title: 'Arrival and Canggu', items: ['12:50 AirAsia AK368 departs KUL', '16:00 arrive DPS', 'Talixo airport pickup', 'Check in to Anasera Villas', 'Mexicola Canggu — confirmed must go', 'Atlas Beach Club — confirmed must go', 'Return to villa'] },
    { day: 2, date: '2026-08-01', title: 'Canggu and Seminyak', items: ['Breakfast or brunch near villa', 'Spa or massage', 'Lunch', 'La Brisa Market — recheck operating schedule', 'Dinner at Santanera — must go recommendation; reserve table', 'La Favela Seminyak — confirmed must go'] },
    { day: 3, date: '2026-08-02', title: 'Canggu to Uluwatu', items: ['Breakfast', 'Optional beginner yoga at The Practice Bali', 'Check out', 'Lunch', 'GrabCar to Uluwatu', 'Check in at Lomo Boutique Hotel & Villas', 'Klive Beach Club at sunset — must go recommendation; not reserved'] },
    { day: 4, date: '2026-08-03', title: 'Uluwatu', items: ['Beach / slow lunch / wellness', '5:00 PM Ømbae Sunset Yoga at Ulu Cliffhouse — planned, not reserved', 'Saltwood Uluwatu — brunch or sunset dinner (interested)'] },
    { day: 5, date: '2026-08-04', title: 'Seminyak and airport', items: ['Check out of Lomo Boutique Hotel & Villas', 'Kamaria Bags optional', 'Bintang Supermarket', 'Lunch', 'Travel to DPS airport', '16:40 AK369 departs DPS', '19:45 arrive KUL'] }
  ]
};

window.TRIPBOOK_ITEM_DETAILS = {
  '12:50 AirAsia AK368 departs KUL': {time:'12:50 PM',title:'Depart Kuala Lumpur',description:'AirAsia AK368 · KUL → DPS',icon:'✈'},
  '16:00 arrive DPS': {time:'4:00 PM',title:'Arrive in Bali',description:'Land at Ngurah Rai International Airport (DPS)',icon:'✈'},
  'Talixo airport pickup': {time:'After arrival',title:'Talixo airport transfer',description:'Confirmed pickup from DPS to Anasera Villas',icon:'⌁'},
  'Check in to Anasera Villas': {time:'After transfer',title:'Check in at Anasera Villas',description:'Settle into your Canggu villa for the first two nights',icon:'⌂'},
  'Mexicola Canggu — confirmed must go': {time:'Evening',title:'Dinner & drinks at Motel Mexicola',description:'Confirmed must-go Canggu stop',icon:'◐'},
  'Atlas Beach Club — confirmed must go': {time:'Night',title:'Atlas Beach Fest',description:'Confirmed must-go nightlife stop',icon:'☀'},
  'Return to villa': {time:'Late night',title:'Return to Anasera Villas',description:'Rest after your arrival day',icon:'⌂'},
  'Breakfast or brunch near villa': {time:'Morning',title:'Breakfast or brunch',description:'Choose a café close to Anasera Villas',icon:'☕'},
  'Spa or massage': {time:'Late morning',title:'Spa or massage',description:'Choose Spring Spa or Marissa Spa Canggu',icon:'✦'},
  'Lunch': {time:'Midday',title:'Lunch',description:'Keep this flexible around your day’s plans',icon:'◌'},
  'La Brisa Market — recheck operating schedule': {time:'Afternoon',title:'La Brisa Market',description:'Recheck the operating schedule before going',icon:'◌'},
  'Dinner at Santanera — must go recommendation; reserve table': {time:'Dinner',title:'Dinner at Santanera',description:'Confirmed must-go restaurant · reserve your table',icon:'◐'},
  'La Favela Seminyak — confirmed must go': {time:'Late night',title:'La Favela Seminyak',description:'Confirmed must-go nightlife stop after dinner',icon:'◐'},
  'Breakfast': {time:'Morning',title:'Breakfast',description:'A relaxed start before moving to Uluwatu',icon:'☕'},
  'Optional beginner yoga at The Practice Bali': {time:'Morning',title:'Beginner yoga at The Practice',description:'Optional class · go only if you feel like it',icon:'✦'},
  'Check out': {time:'Late morning',title:'Check out of Anasera Villas',description:'Confirm your departure time with the villa',icon:'⌂'},
  'GrabCar to Uluwatu': {time:'Afternoon',title:'Transfer to Uluwatu',description:'GrabCar from Canggu to Lomo Boutique Hotel',icon:'⌁'},
  'Check in at Lomo Boutique Hotel & Villas': {time:'From 2:00 PM',title:'Check in at Lomo Boutique Hotel',description:'Uluwatu stay · Junior Suite with Bathtub',icon:'⌂'},
  'Klive Beach Club at sunset — must go recommendation; not reserved': {time:'Sunset',title:'Klive Beach Club',description:'Confirmed must-go sunset and dinner plan · not reserved',icon:'☀'},
  'Beach / slow lunch / wellness': {time:'Daytime',title:'Beach, slow lunch & wellness',description:'Keep this day relaxed around your Uluwatu interests',icon:'☀'},
  '5:00 PM Ømbae Sunset Yoga at Ulu Cliffhouse — planned, not reserved': {time:'5:00 PM',title:'Ømbae Sunset Yoga',description:'Ulu Cliffhouse · planned, not reserved',icon:'✦'},
  'Saltwood Uluwatu — brunch or sunset dinner (interested)': {time:'Flexible',title:'Saltwood Bingin',description:'Choose brunch or sunset dinner · interested',icon:'◐'},
  'Check out of Lomo Boutique Hotel & Villas': {time:'By 12:30 PM',title:'Check out of Lomo Boutique Hotel',description:'Pack up before your airport day',icon:'⌂'},
  'Kamaria Bags optional': {time:'Early afternoon',title:'Kamaria Bags',description:'Optional shopping stop',icon:'◌'},
  'Bintang Supermarket': {time:'Afternoon',title:'Bintang Supermarket',description:'Pick up Bali snacks or last-minute items',icon:'◌'},
  'Travel to DPS airport': {time:'Before flight',title:'Travel to DPS airport',description:'Allow enough time for airport check-in',icon:'⌁'},
  '16:40 AK369 departs DPS': {time:'4:40 PM',title:'Depart Bali',description:'AirAsia AK369 · DPS → KUL',icon:'✈'},
  '19:45 arrive KUL': {time:'7:45 PM',title:'Arrive in Kuala Lumpur',description:'Back home at KUL',icon:'✈'}
};
