const hotels = [
  {
    id: "c1",
    category: "cox'sBazar",
    title: "Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar",
    img: "https://i.ibb.co/Tg245g3/cox-s2.jpg",
    description:
      "Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar has a restaurant, bar, a shared lounge and garden in Cox's Bazar. With free WiFi, this 5-star resort offers a private beach area and room service. The resort features an outdoor swimming pool, fitness centre, evening entertainment and a 24-hour front desk. The rooms in the resort are fitted with a flat-screen TV. Guests at Royal Tulip Sea Pearl Beach Resort can enjoy a continental or a buffet breakfast. The accommodation offers a children's playground. We speak your language!",
    star: 4.9,
    price: 50,
    lat: 21.5833,
    long: 92.0167,
  },
  {
    id: "c2",
    category: "cox'sBazar",
    title: "Hotel Sea Crown",
    img: "https://i.ibb.co/2SrZ1H7/cox-s3.jpg",
    description:
      "Situated on the beachfront and offering a 24-hour front desk, Hotel Sea Crown is located just 1.5 km from the famous Sugandha Beach. Free WiFi access is available.. Each air-conditioned room here will provide you with a seating area and work desk. Featuring a shower, private bathroom comes with free toiletries. At Hotel Sea Crown you will find a garden. Other facilities offered at the property include a shared lounge, a tour desk and luggage storage. The property offers free parking. The property is located just 3 km from the scenic Laboni Beach and 4.1 km from Buddhist Temple and the popular Cox's Bazar. The Cox's Bazar Airport and Cox's Bazar Bus Station are located within 4.8 km. The guests can enjoy their meals at the in-house restaurant and refreshing alcoholic and non-alcoholic beverages at the bar. Room service is available for 24-hour. Couples particularly like the location — they rated it 9.0 for a two-person trip. We speak your language!",
    star: 4.7,
    price: 46,
    lat: 21.5833,
    long: 92.0167,
  },
  {
    id: "c3",
    category: "cox'sBazar",
    title: "Long Beach Hotel",
    img: "https://i.ibb.co/LkMjRmd/cox-s4.jpg",
    description:
      "Offering an indoor pool, a fitness centre and a spa and wellness centre, Long Beach Hotel is located 3.3 km from the Cox's Bazar Airport and Local Bus Station. Free wired internet is available in the rooms of the property. Each air-conditioned room here will provide you with a satellite TV, seating area and a balcony. There is also a minibar. Featuring a shower, private bathroom also comes with bathrobes and free toiletries. At Long Beach Hotel you will find a 24-hour front desk, BBQ facilities and garden. Other facilities offered at the property include meeting facilities, a shared lounge and a ticket service. The property offers free parking. The Barmiz Market Cox’s Bazar is 3 km, the Himchari National Park is 8 km and the Binani Beach is 24 km away. The Cozy Restaurant serves International delights while the Bar Sunset Pool side BBQ serves refreshing beverages. 24-hour room service is available for private dining. We speak your language!",
    star: 4.5,
    price: 43,
    lat: 21.5833,
    long: 92.0167,
  },
  {
    id: "s1",
    category: "sreemangal",
    title: "Green Leaf Guest House",
    img: "https://i.ibb.co/yWWn4R0/sreemangal2.jpg",
    description:
      "Green Leaf Guest House features city views, free WiFi and free private parking, set in Sreemangal. All units come with a seating area, a TV with satellite channels and a private bathroom with free toiletries and shower. Guests at the bed and breakfast can enjoy an Asian breakfast. Green Leaf Guest House offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby. Couples particularly like the location — they rated it 8.5 for a two-person trip. We speak your language!",
    star: 4.9,
    price: 50,
    lat: 24.3083,
    long: 91.7333,
  },
  {
    id: "s2",
    category: "sreemangal",
    title: "Grand Selim Resort & Tour – GSRT",
    img: "https://i.ibb.co/ZYxgLHV/sreemangal3.jpg",
    description:
      "Grand Selim Resort & Tour – GSRT features a restaurant, outdoor swimming pool, a shared lounge and garden in Sreemangal. This 3-star resort offers room service and a concierge service. The accommodation offers a 24-hour front desk, airport transfers, a shared kitchen and free WiFi throughout the property. The units come with a flat-screen TV with satellite channels, toaster, a coffee machine, a bidet, a hairdryer and a wardrobe. Featuring a private bathroom with a shower and free toiletries, rooms at the resort also have a garden view. At Grand Selim Resort & Tour – GSRT all rooms come with a shared bathroom. Guests at the accommodation can enjoy a continental or a à la carte breakfast. Grand Selim Resort & Tour – GSRT offers a children's playground. We speak your language!",
    star: 4.7,
    price: 46,
    lat: 24.3083,
    long: 91.7333,
  },
  {
    id: "s3",
    category: "sreemangal",
    title: "ParadiseLodge Guest House",
    img: "https://i.ibb.co/Nmqq0Dx/sreemangal4.jpg",
    description:
      "Boasting a garden, ParadiseLodge Guest House is situated in Sreemangal. Private parking can be arranged at an extra charge. The rooms in the guest house are fitted with a kettle. At ParadiseLodge Guest House rooms have air conditioning and a flat-screen TV. Guests at the accommodation can enjoy a continental breakfast. ParadiseLodge Guest House offers a hot tub. We speak your language!",
    star: 4.5,
    price: 43,
    lat: 24.3083,
    long: 91.7333,
  },
  {
    id: "b1",
    category: "sundarban",
    title: "Venus Resort Pvs Ltd",
    img: "https://i.ibb.co/drDH6jF/bandarban2.jpg",
    description:
      "Venus Resort Pvs Ltd is located in Bāndarban and features a garden. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. Private parking can be arranged at an extra charge. All units in the hotel are equipped with a flat-screen TV. At Venus Resort Pvs Ltd, every room comes with air conditioning and a private bathroom. A continental breakfast is available daily at the accommodation. We speak your language!",
    star: 4.9,
    price: 50,
    lat: 21.57,
    long: 89.11,
  },
  {
    id: "b2",
    category: "sundarban",
    title: "Holiday Inn Resort Bandarban",
    img: "https://i.ibb.co/GTFf749/bandarban3.jpg",
    description:
      "Situated in Sundarban, Holiday Inn Resort Bandarban has a restaurant, garden, terrace, and free WiFi. Private parking can be arranged at an extra charge. The rooms in the resort are fitted with a flat-screen TV. At Holiday Inn Resort Bandarban, rooms are fitted with air conditioning and a private bathroom.",
    star: 4.7,
    price: 46,
    lat: 21.57,
    long: 89.11,
  },
  {
    id: "b3",
    category: "sundarban",
    title: "Bono Nibash Hill Resort",
    img: "https://i.ibb.co/tq5hNks/bandarban4.jpg",
    description:
      "Bono Nibash Hill Resort is located in Sundarban. Featuring a 24-hour front desk, this property also provides guests with a restaurant. Private parking is available on site. We speak your language!",
    star: 4.5,
    price: 43,
    lat: 21.57,
    long: 89.11,
  },
];

export default hotels;
