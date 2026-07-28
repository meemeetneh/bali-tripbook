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
    { day: 1, date: '2026-07-31', title: 'Arrival and Canggu', items: ['12:50 AirAsia AK368 departs KUL', '16:00 arrive DPS', 'Talixo airport pickup', 'Check in to Anasera Villas', 'Mexicola Canggu', 'Atlas Beach Club', 'Return to villa'] },
    { day: 2, date: '2026-08-01', title: 'Canggu and Seminyak', items: ['Breakfast or brunch near villa', 'Spa or massage', 'Lunch', 'La Brisa Market — recheck operating schedule', 'Dinner at Santanera — must go recommendation; reserve table', 'La Favela Seminyak'] },
    { day: 3, date: '2026-08-02', title: 'Canggu to Uluwatu', items: ['Breakfast', 'Optional beginner yoga at The Practice Bali', 'Check out', 'Lunch', 'GrabCar to Uluwatu', 'Check in at Lomo Boutique Hotel & Villas', 'Klive Beach Club at sunset — must go recommendation; not reserved'] },
    { day: 4, date: '2026-08-03', title: 'Uluwatu', items: ['Beach / slow lunch / wellness', '5:00 PM Ømbae Sunset Yoga at Ulu Cliffhouse — planned, not reserved', 'Saltwood Uluwatu — brunch or sunset dinner (interested)'] },
    { day: 5, date: '2026-08-04', title: 'Seminyak and airport', items: ['Check out of Lomo Boutique Hotel & Villas', 'Kamaria Bags optional', 'Bintang Supermarket', 'Lunch', 'Travel to DPS airport', '16:40 AK369 departs DPS', '19:45 arrive KUL'] }
  ]
};
