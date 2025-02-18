const data = [
  {
    id: 1,
    name: "Agra",
    info: "Agra is a historic city located in Uttar Pradesh, renowned for the Taj Mahal, one of the Seven Wonders of the World. The city also features the impressive Agra Fort and Fatehpur Sikri, which are UNESCO World Heritage Sites. Agra's Mughal architecture, rich history, and vibrant culture make it a must-visit destination.",
    image:
      "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "35,758",
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur, the capital of Rajasthan, is famously known as the 'Pink City' due to the distinct color of its buildings. The city is home to grand palaces like the Hawa Mahal and Amber Fort, along with bustling markets and vibrant traditions. Jaipur offers a blend of royal history, rich culture, and architectural wonders.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFpcHVyfGVufDB8fDB8fHww",
    price: "82,560",
  },
  {
    id: 3,
    name: "Goa",
    info: "Goa, located on the western coast of India, is known for its stunning beaches, vibrant nightlife, and Portuguese colonial architecture. The state offers a mix of serene beaches, water sports, historical churches, and unique Goan culture. Whether you are looking to relax or explore, Goa provides an unforgettable experience.",
    image:
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww",
    price: "29,695",
  },
  {
    id: 4,
    name: "Varanasi",
    info: "Varanasi, one of the oldest living cities in the world, is considered the spiritual capital of India. Located on the banks of the holy Ganges River, Varanasi is a major pilgrimage site for Hindus. Visitors can experience the mesmerizing Ganga Aarti, explore the narrow lanes, and visit temples that have stood for centuries.",
    image:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
    price: "31,095",
  },
  {
    id: 5,
    name: "Darjeeling",
    info: "Darjeeling, a hill station in West Bengal, is famous for its breathtaking views of the Himalayas, including the majestic Kanchenjunga. Known for its tea plantations, it offers a unique blend of natural beauty, colonial architecture, and Tibetan culture. The Darjeeling Himalayan Railway, a UNESCO World Heritage Site, adds to its charm.",
    image:
      "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    price: "78,595",
  },
  {
    id: 6,
    name: "Jaisalmer",
    info: "Jaisalmer, also known as the 'Golden City,' is a desert town in Rajasthan, famous for its sandstone architecture. The Jaisalmer Fort, havelis, and the Thar Desert landscape give the city a mystical charm. A visit to Jaisalmer offers an opportunity to experience Rajasthan's rich history, culture, and heritage in an arid, stunning environment.",
    image:
      "https://plus.unsplash.com/premium_photo-1661953630194-4bef71f0440d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpc2FsbWVyfGVufDB8fDB8fHww",
    price: "68,595",
  },
  {
    id: 7,
    name: "Kochi",
    info: "Kochi, located in Kerala, is a vibrant port city known for its diverse culture, historical significance, and scenic beauty. With its colonial architecture, bustling spice markets, and the famous Chinese fishing nets, Kochi offers a unique blend of history, culture, and nature, making it one of the top destinations in South India.",
    image:
      "https://images.unsplash.com/photo-1599328431991-365a583f09f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29jaGl8ZW58MHx8MHx8fDA%3D",
    price: "68,595",
  },
  {
    id: 8,
    name: "Udaipur",
    info: "Udaipur, often referred to as the 'City of Lakes,' is a stunning city in Rajasthan known for its romantic ambiance, palaces, and scenic beauty. The City Palace and Lake Pichola are key attractions, along with other architectural wonders like Jag Mandir and the Saheliyon ki Bari. Udaipur's picturesque setting makes it a popular destination for weddings and photography.",
    image:
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    price: "50,000",
  },
  {
    id: 9,
    name: "Rishikesh",
    info: "Rishikesh, located in Uttarakhand, is known as the 'Yoga Capital of the World.' This serene town, nestled in the foothills of the Himalayas, attracts yoga enthusiasts, spiritual seekers, and adventure lovers alike. The sacred Ganges River, ashrams, and trekking trails offer a perfect blend of peace, spirituality, and adventure.",
    image:
      "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmlzaGlrZXNofGVufDB8fDB8fHww",
    price: "25,000",
  },
  {
    id: 10,
    name: "Amritsar",
    info: "Amritsar, the spiritual heart of Sikhism, is home to the Golden Temple, one of the most visited religious places in the world. The city is rich in cultural and historical significance, with attractions like the Jallianwala Bagh memorial and the Wagah Border ceremony. Amritsar offers a deep insight into Sikh culture, history, and hospitality.",
    image:
      "https://images.unsplash.com/photo-1517427677506-ade074eb1432?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D",
    price: "20,500",
  },
  {
    id: 11,
    name: "Delhi",
    info: "Delhi, the capital of India, is a vibrant metropolis that offers a blend of ancient history and modern developments. From the grandeur of the Red Fort and Qutub Minar to the bustling markets of Chandni Chowk, Delhi is a city of contrasts. It is a hub of political, cultural, and educational activities, offering something for every traveler.",
    image:
      "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
    price: "40,000",
  },
  {
    id: 12,
    name: "Mumbai",
    info: "Mumbai, India's financial capital, is a bustling metropolis known for its vibrant culture, history, and entertainment industry. Home to Bollywood, the Gateway of India, and a thriving nightlife, Mumbai is an energetic city where tradition meets modernity. The diverse food scene and iconic beaches like Juhu and Marine Drive add to its allure.",
    image:
      "https://images.unsplash.com/photo-1633943082604-290aa6f57626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    price: "90,000",
  },
  {
    id: 13,
    name: "Bangalore",
    info: "Bangalore, also known as Bengaluru, is the tech hub of India and is often referred to as the 'Silicon Valley of India.' The city is home to numerous tech startups, educational institutions, and beautiful parks. Known for its pleasant climate, vibrant nightlife, and diverse food culture, Bangalore has something for everyone.",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww",
    price: "60,000",
  },
  {
    id: 14,
    name: "Chennai",
    info: "Chennai, located on the southeastern coast of India, is known for its rich cultural heritage, ancient temples, and beautiful beaches. As the capital of Tamil Nadu, Chennai is a hub of classical music, dance, and architecture. The city's colonial history, combined with its thriving modern industries, makes it a unique blend of old and new.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D",
    price: "55,000",
  },
  {
    id: 15,
    name: "Hyderabad",
    info: "Hyderabad, known as the 'City of Pearls,' is famous for its rich history, iconic Charminar, and flavorful cuisine, particularly biryani. The city is home to ancient forts, palaces, and the high-tech business district of HITEC City. A blend of Mughal and South Indian culture, Hyderabad is a city that offers both heritage and modernity.",
    image:
      "https://images.unsplash.com/photo-1470075446540-4391a96ec621?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHlkZXJhYmFkfGVufDB8fDB8fHww",
    price: "70,000",
  },
  {
    id: 16,
    name: "Kolkata",
    info: "Kolkata, formerly known as Calcutta, is the cultural capital of India. The city is renowned for its literary history, colonial architecture, and vibrant arts scene. From the grand Victoria Memorial to the colorful festivals like Durga Puja, Kolkata showcases a unique blend of tradition, intellectualism, and contemporary vibrancy.",
    image:
      "https://images.unsplash.com/photo-1626198226928-617fc6c6203e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
    price: "48,000",
  },
  {
    id: 17,
    name: "Pune",
    info: "Pune, a city in Maharashtra, is known for its educational institutions, historical landmarks, and youthful energy. The city offers a mix of cultural attractions, including the Aga Khan Palace and Shaniwar Wada, along with a growing tech industry. Pune's cool climate, along with its proximity to the Western Ghats, makes it a popular destination for nature lovers.",
    image:"https://images.unsplash.com/photo-1572782252655-9c8771392601?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVuZXxlbnwwfHwwfHx8MA%3D%3D",
    price: "58,000",
  },
  {
    id: 32,
    name: "Spiti Valley",
    info: "Spiti Valley, nestled in Himachal Pradesh, is a hidden gem often referred to as 'Little Tibet.' The valley is famous for its rugged landscapes, Buddhist monasteries, and the unique blend of Tibetan culture. The stark beauty of the region, combined with its remote, untouched environment, offers an extraordinary experience for those seeking solitude and adventure. Key highlights include the Ki Monastery, Chandratal Lake, and the Pin Valley National Park.",
    image: "https://plus.unsplash.com/premium_photo-1661878309257-f4343940ce4d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpdGklMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
    price: "45,000",
  },
  {
    id: 19,
    name: "Sikkim",
    info: "Sikkim, located in the northeastern part of India, is known for its stunning natural beauty, including the snow-capped peaks of the Kanchenjunga mountain range. The state is rich in biodiversity, with vibrant monasteries, lush valleys, and charming towns. Sikkim offers a peaceful escape into nature and spirituality.",
    image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lra2ltfGVufDB8fDB8fHww",
    price: "68,595",
  },
  {
    id: 20,
    name: "Shillong",
    info: "Shillong, often referred to as the 'Scotland of the East,' is the capital of Meghalaya and is known for its beautiful landscapes, rolling hills, and pleasant weather. The city offers a mix of scenic beauty, waterfalls, and cultural experiences, making it a popular destination for nature lovers and adventurers.",
    image: "https://images.unsplash.com/photo-1625826415766-001bd75aaf52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpbGxvbmd8ZW58MHx8MHx8fDA%3D",
    price: "55,000",
  },
  {
    id: 21,
    name: "Leh-Ladakh",
    info: "Leh-Ladakh, located in the northernmost part of India, is known for its barren beauty, high-altitude deserts, and majestic monasteries. The region offers spectacular views of the Himalayas, pristine lakes like Pangong Lake, and unique Buddhist culture. Ladakh is a dream destination for adventure enthusiasts and peace seekers alike.",
    image: "https://images.unsplash.com/photo-1617824077360-7a77db40aae1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVoJTIwbGFkYWtofGVufDB8fDB8fHww",
    price: "90,000",
  },
  {
    id: 22,
    name: "Mysore",
    info: "Mysore, a historic city in Karnataka, is famous for its royal heritage, palaces, and festivals. The Mysore Palace, with its grand architecture, is a major tourist attraction, along with the famous Chamundeshwari Temple. The city is also known for its yoga centers and the vibrant Dussehra celebrations.",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXlzb3JlfGVufDB8fDB8fHww",
    price: "45,000",
  },
  {
    id: 23,
    name: "Andaman Islands",
    info: "The Andaman Islands, located in the Bay of Bengal, are known for their pristine beaches, clear blue waters, and diverse marine life. With islands like Havelock and Neil, visitors can indulge in water sports, explore coral reefs, and relax on some of India's most beautiful and secluded beaches.",
    image: "https://plus.unsplash.com/premium_photo-1661940254003-c3f37e5d32ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    price: "85,000",
  },
  {
    id: 24,
    name: "Khajuraho",
    info: "Khajuraho, located in Madhya Pradesh, is famous for its ancient temples and intricate sculptures depicting various aspects of Indian culture and history. The UNESCO World Heritage Site attracts visitors with its exceptional architecture and art, along with the beautiful dance festival held annually.",
    image: "https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2hhanVyYWhvfGVufDB8fDB8fHww",
    price: "38,500",
  },
  {
    id: 25,
    name: "Tirupati",
    info: "Tirupati, located in Andhra Pradesh, is home to the famous Venkateswara Temple, one of the most visited pilgrimage sites in the world. The city is surrounded by hills, lush forests, and serene lakes, offering a peaceful retreat for devotees and tourists alike.",
    image: "https://images.unsplash.com/photo-1529733772151-bab41484710a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlydXBhdGl8ZW58MHx8MHx8fDA%3D",
    price: "25,000",
  },
  {
    id: 26,
    name: "Bodh Gaya",
    info: "Bodh Gaya, located in Bihar, is the place where Lord Buddha attained enlightenment under the Bodhi Tree. The site is a major pilgrimage destination for Buddhists and features significant temples and monuments like the Mahabodhi Temple. The peaceful atmosphere and historical importance make it an enriching experience for visitors.",
    image: "https://images.unsplash.com/photo-1656663785677-bc21fcb531db?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9kaCUyMGdheWF8ZW58MHx8MHx8fDA%3D",
    price: "28,500",
  },
  {
    id: 27,
    name: "Hampi",
    info: "Hampi, a UNESCO World Heritage Site in Karnataka, is known for its stunning ruins and ancient temples. Once the capital of the Vijayanagara Empire, Hampi is now a fascinating archaeological site with spectacular monuments, including the Virupaksha Temple and the Vittala Temple complex.",
    image: "https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtcGl8ZW58MHx8MHx8fDA%3D",
    price: "35,000",
  },
  {
    id: 28,
    name: "Kashmir",
    info: "Kashmir, known as 'Paradise on Earth,' is a region of breathtaking natural beauty, with snow-capped mountains, tranquil lakes, and lush valleys. Popular destinations like Srinagar, Gulmarg, and Pahalgam offer a mix of adventure, spiritual experiences, and pristine nature.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFtbXUlMjBhbmQlMjBrYXNobWlyfGVufDB8fDB8fHww",
    price: "55,000",
  },
  {
    id: 29,
    name: "Nainital",
    info: "Nainital, located in Uttarakhand, is a charming hill station known for its picturesque lake and scenic views. Surrounded by lush forests and hills, Nainital offers opportunities for boating, trekking, and sightseeing. The Naini Devi Temple and Snow View Point are popular attractions.",
    image: "https://images.unsplash.com/photo-1683598545969-7f560be8ac2c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFuaXRhbHxlbnwwfHwwfHx8MA%3D%3D",
    price: "60,000",
  },
  {
    id: 30,
    name: "Coorg",
    info: "Coorg, also known as Kodagu, is a scenic hill station in Karnataka famous for its coffee plantations, misty hills, and lush forests. Coorg is an ideal destination for nature lovers and adventure enthusiasts, offering activities like trekking, wildlife safaris, and visiting the Dubare Elephant Camp.",
    image: "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D",
    price: "50,000",
  },
];
export default data;
