export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  stock: number;
  image: string;
  status: string;
  tag: string;
  region: string;
  description: string;
  ingredients: string[];
  shelfLife: string;
  weight: string;
}

export const mockProducts: Product[] = [
  // Masalas
  { 
    id: 1, slug: 'premium-goda-masala', name: 'Premium Goda Masala', category: 'Masalas', 
    price: 150, originalPrice: 180, stock: 45, image: '/images/spices_new.jpg', status: 'In Stock', tag: 'Bestseller',
    region: 'Pune, Desh',
    description: 'The soul of Maharashtrian vegetarian cooking. Our authentic Goda Masala is traditionally sun-dried and slowly hand-pounded to release the deep, smoky aroma of roasted coconut, sesame seeds, and 18 carefully selected whole spices. Perfect for everyday Amti, Bharli Vangi, or Masale Bhat.',
    ingredients: ['Coriander Seeds', 'Cumin', 'Sesame Seeds', 'Dry Coconut', 'Stone Flower (Dagad Phool)', 'Cloves', 'Cinnamon'],
    shelfLife: '9 Months', weight: '250g'
  },
  {
    id: 101, slug: 'kala-masala', name: 'Kala Masala', category: 'Masalas',
    price: 160, originalPrice: 190, stock: 30, image: '/images/spices_new.jpg', status: 'In Stock', tag: 'Traditional',
    region: 'Khandesh',
    description: 'A deeply roasted, intensely smoky spice blend native to the dry Khandesh region. Whole spices are roasted until nearly black (Kala) on cast-iron griddles, yielding a robust masala essential for fiery mutton curries and spicy vegetarian gravies.',
    ingredients: ['Dry Coconut', 'Coriander Seeds', 'Black Pepper', 'Cloves', 'Roasted Onion'],
    shelfLife: '9 Months', weight: '250g'
  },
  {
    id: 102, slug: 'malvani-masala', name: 'Malvani Masala', category: 'Masalas',
    price: 180, originalPrice: null, stock: 40, image: '/images/spices_new.jpg', status: 'In Stock', tag: 'Coastal',
    region: 'Konkan Coast',
    description: 'The definitive coastal spice blend. Sourced directly from Sindhudurg, this masala perfectly balances fiery red chilies with aromatic coastal spices. It is the secret behind the famous Malvani fish curry and Kombdi Vade.',
    ingredients: ['Byadgi Chilies', 'Triphala', 'Coriander Seeds', 'Mustard Seeds', 'Mace'],
    shelfLife: '12 Months', weight: '250g'
  },
  {
    id: 103, slug: 'kolhapuri-masala', name: 'Kolhapuri Masala', category: 'Masalas',
    price: 190, originalPrice: 220, stock: 50, image: '/images/spices_new.jpg', status: 'In Stock', tag: 'Spicy',
    region: 'Kolhapur',
    description: 'Not for the faint of heart. This world-famous blend uses the notoriously spicy Lavangi chilies of Kolhapur. It delivers a sharp, sweat-inducing heat that characterizes the legendary Kolhapuri Tambda Rassa (Red Curry).',
    ingredients: ['Lavangi Chilies', 'Garlic', 'Sesame Seeds', 'Dry Coconut', 'Cinnamon'],
    shelfLife: '9 Months', weight: '250g'
  },

  // Chutneys
  { 
    id: 2, slug: 'spicy-lasun-chutney', name: 'Spicy Lasun Chutney', category: 'Chutneys', 
    price: 90, originalPrice: null, stock: 0, image: '/images/lasun_chutney.jpg', status: 'Out of Stock', tag: '',
    region: 'Kolhapur',
    description: 'A fiery, vibrant garlic chutney that packs a true Kolhapuri punch. Made with pungent native garlic and deep red Sankeshwari chilies, this coarse dry chutney is the absolute perfect accompaniment to a hot Vada Pav, Bhakri, or sprinkled over your morning Poha.',
    ingredients: ['Garlic', 'Red Chili Powder', 'Dry Coconut', 'Peanuts', 'Salt', 'Cumin'],
    shelfLife: '6 Months', weight: '100g'
  },
  { 
    id: 9, slug: 'solapuri-shengdana-chutney', name: 'Shengdana Chutney', category: 'Chutneys', 
    price: 110, originalPrice: null, stock: 40, image: '/images/lasun_chutney.jpg', status: 'In Stock', tag: 'Spicy',
    region: 'Solapur',
    description: 'A staple of the hardworking farmers of Solapur. Roasted peanuts are crushed with fiery red chilies, cumin, and garlic to create a deeply nutty, intense dry chutney that transforms a simple Jowar Bhakri into a feast.',
    ingredients: ['Roasted Peanuts', 'Red Chilies', 'Garlic', 'Cumin', 'Salt'],
    shelfLife: '6 Months', weight: '150g'
  },
  {
    id: 104, slug: 'dry-coconut-chutney', name: 'Dry Coconut Chutney', category: 'Chutneys',
    price: 100, originalPrice: 120, stock: 55, image: '/images/lasun_chutney.jpg', status: 'In Stock', tag: '',
    region: 'Desh',
    description: 'A deeply savory, mildly spiced dry chutney. Grated dry coconut (Khobra) is roasted with garlic and red chili powder. A must-have texture component for Vada Pav and a great crunchy topping for Varan Bhaat.',
    ingredients: ['Dry Coconut (Khobra)', 'Garlic', 'Red Chili Powder', 'Salt'],
    shelfLife: '6 Months', weight: '150g'
  },
  {
    id: 105, slug: 'til-chutney', name: 'Til Chutney', category: 'Chutneys',
    price: 95, originalPrice: null, stock: 60, image: '/images/lasun_chutney.jpg', status: 'In Stock', tag: 'Winter Special',
    region: 'Marathwada',
    description: 'A highly nutritious winter delicacy. Toasted sesame seeds (Til) blended with jaggery and a hint of chili. It provides essential warmth and healthy fats during the colder months, traditionally eaten with Bajra Bhakri.',
    ingredients: ['Sesame Seeds (Til)', 'Jaggery', 'Red Chili Powder', 'Salt'],
    shelfLife: '6 Months', weight: '150g'
  },

  // Snacks & Festive Specials
  {
    id: 106, slug: 'bhajani-chakli', name: 'Bhajani Chakli', category: 'Festive Specials',
    price: 220, originalPrice: 250, stock: 120, image: '/images/bhajani_chakli.jpg', status: 'In Stock', tag: 'Bestseller',
    region: 'Pune, Maharashtra',
    description: 'The crown jewel of Diwali Faral. Unlike regular chaklis, Bhajani Chaklis are made from a painstakingly prepared multi-grain roasted flour (Bhajani). Golden, spiked, and outrageously crunchy, spiked with carom seeds and cumin. It is impossible to stop at one.',
    ingredients: ['Bhajani Flour (Rice, Chana Dal, Urad Dal)', 'Carom Seeds (Owa)', 'Cumin', 'Red Chili Powder', 'Sesame Seeds'],
    shelfLife: '3 Months', weight: '250g'
  },
  {
    id: 107, slug: 'bakarwadi', name: 'Bakarwadi', category: 'Snacks',
    price: 180, originalPrice: null, stock: 85, image: '/images/bakarwadi.jpg', status: 'In Stock', tag: 'Pune Famous',
    region: 'Pune',
    description: 'A legendary sweet, spicy, and tangy snack. A tight spiral of gram flour dough, generously stuffed with a potent masala of coconut, poppy seeds, and sesame, then deep-fried to a perfect crisp. A beloved companion for evening tea.',
    ingredients: ['Gram Flour (Besan)', 'Refined Flour', 'Dry Coconut', 'Poppy Seeds', 'Fennel', 'Tamarind Paste'],
    shelfLife: '3 Months', weight: '250g'
  },
  {
    id: 108, slug: 'sweet-shankarpali', name: 'Sweet Shankarpali', category: 'Festive Specials',
    price: 150, originalPrice: 180, stock: 50, image: '/images/faral.jpg', status: 'In Stock', tag: 'Sweet',
    region: 'Desh',
    description: 'Crisp, diamond-shaped, melt-in-the-mouth sweet biscuits. Made by kneading flour with pure A2 ghee and milk, these bite-sized treats are mildly sweet and completely addictive. A favorite among children and adults alike.',
    ingredients: ['Refined Flour', 'Sugar', 'Pure Ghee', 'Milk', 'Cardamom'],
    shelfLife: '3 Months', weight: '250g'
  },
  { 
    id: 16, slug: 'karanji', name: 'Karanji', category: 'Festive Specials', 
    price: 300, originalPrice: 350, stock: 35, image: '/images/karanji.png', status: 'In Stock', tag: 'Diwali Special',
    region: 'Pune',
    description: 'A masterpiece of culinary architecture. Crispy, ghee-laminated half-moons encasing a rich, sweet stuffing of dry coconut, poppy seeds, and dry fruits. The ultimate symbol of Maharashtrian hospitality.',
    ingredients: ['Refined Wheat Flour (Maida)', 'Dry Coconut', 'Powdered Sugar', 'Poppy Seeds', 'Cardamom', 'A2 Ghee'],
    shelfLife: '2 Months', weight: '250g'
  },
  {
    id: 109, slug: 'poha-chivda', name: 'Poha Chivda', category: 'Festive Specials',
    price: 140, originalPrice: 160, stock: 75, image: '/images/faral.jpg', status: 'In Stock', tag: 'Light Snack',
    region: 'Nashik',
    description: 'A light, savory, and incredibly crispy snack made from flattened rice (Poha). Tempered with mustard seeds, curry leaves, roasted peanuts, and roasted gram (Dalia). A burst of sweet, salty, and mildly spicy flavors in every handful.',
    ingredients: ['Flattened Rice (Thin Poha)', 'Peanuts', 'Roasted Gram (Dalia)', 'Curry Leaves', 'Green Chilies', 'Sugar Powder'],
    shelfLife: '3 Months', weight: '250g'
  },
  { 
    id: 3, slug: 'crispy-kurdai', name: 'Kurdai', category: 'Snacks', 
    price: 200, originalPrice: null, stock: 34, image: '/images/kurdai.jpg', status: 'In Stock', tag: '',
    region: 'Khandesh',
    description: 'A labor of love and a true summer tradition. These intricate, noodle-like dried wheat crisps take days to ferment and press by hand. When deep-fried, they instantly bloom into light, wildly crunchy, snow-white spirals that melt in your mouth.',
    ingredients: ['Fermented Whole Wheat (Gahu)', 'Salt', 'Water'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 110, slug: 'sandge', name: 'Sandge', category: 'Snacks',
    price: 160, originalPrice: null, stock: 40, image: '/images/essentials.jpg', status: 'In Stock', tag: 'Traditional',
    region: 'Marathwada',
    description: 'Sun-dried, spiced lentil dumplings. Made during the scorching summer months by village women, these are deep-fried and served alongside meals for a spicy crunch, or cooked into a thick, rustic vegetable curry (Sandgyachi Amti) during the monsoons.',
    ingredients: ['Mixed Lentils (Moong, Chana, Urad)', 'Red Chili Powder', 'Cumin', 'Garlic'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 111, slug: 'fryums', name: 'Fryums', category: 'Snacks',
    price: 90, originalPrice: null, stock: 120, image: '/images/kurdai.jpg', status: 'In Stock', tag: 'Kids Favorite',
    region: 'Maharashtra',
    description: 'Colorful, fun-shaped dried crisps that puff up massively when fried. A nostalgic childhood favorite across Maharashtra, perfect for pairing with simple dal-rice meals to convince children to eat their lunch!',
    ingredients: ['Sago (Sabudana) Flour', 'Rice Flour', 'Salt', 'Edible Colors'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 112, slug: 'bhadang', name: 'Bhadang', category: 'Snacks',
    price: 110, originalPrice: null, stock: 90, image: '/images/faral.jpg', status: 'In Stock', tag: 'Spicy',
    region: 'Kolhapur',
    description: 'A notoriously spicy and addictive puffed rice snack native to Kolhapur and Sangli. Tossed in a fiery garlic-red chili tempering with loads of peanuts. The ultimate spicy tea-time snack for those who love heat.',
    ingredients: ['Puffed Rice (Kurmure)', 'Garlic', 'Red Chili Powder', 'Peanuts', 'Curry Leaves'],
    shelfLife: '4 Months', weight: '250g'
  },

  // Sweets
  {
    id: 113, slug: 'besan-ladoo', name: 'Besan Ladoo', category: 'Sweets',
    price: 280, originalPrice: 320, stock: 45, image: '/images/festive.jpg', status: 'In Stock', tag: 'Festive',
    region: 'Pune',
    description: 'Rich, golden spheres of joy. We slow-roast premium coarse gram flour (Besan) in pure A2 ghee until it turns a deep, aromatic brown. Mixed with sugar and cardamom, these ladoos melt completely in your mouth, leaving a rich, nutty finish.',
    ingredients: ['Coarse Gram Flour (Besan)', 'Pure A2 Ghee', 'Powdered Sugar', 'Cardamom', 'Nutmeg'],
    shelfLife: '2 Months', weight: '250g'
  },
  {
    id: 114, slug: 'dink-ladoo', name: 'Dink Ladoo', category: 'Sweets',
    price: 350, originalPrice: 400, stock: 25, image: '/images/festive.jpg', status: 'In Stock', tag: 'Winter Health',
    region: 'Desh',
    description: 'A winter powerhouse of nutrition and warmth. Made with edible gum (Dink), dry dates (Kharik), almonds, dry coconut, and jaggery, bound together with pure ghee. Traditionally given to nursing mothers, it provides immense energy and joint support.',
    ingredients: ['Edible Gum (Dink)', 'Dry Dates (Kharik)', 'Almonds', 'Dry Coconut', 'Jaggery', 'Pure Ghee'],
    shelfLife: '2 Months', weight: '250g'
  },
  {
    id: 115, slug: 'amba-barfi', name: 'Amba Barfi', category: 'Sweets',
    price: 320, originalPrice: 350, stock: 60, image: '/images/festive.jpg', status: 'In Stock', tag: 'Summer Special',
    region: 'Ratnagiri, Konkan',
    description: 'The taste of the Konkan summer preserved in a sweet square. Made from authentic, pure Alphonso mango pulp reduced with milk solids (Khoya) and sugar. A dense, fudgy, highly aromatic barfi that celebrates the King of Fruits.',
    ingredients: ['Alphonso Mango Pulp', 'Milk Solids (Khoya)', 'Sugar', 'Cardamom', 'Pistachios'],
    shelfLife: '1 Month', weight: '250g'
  },
  {
    id: 116, slug: 'puran-poli-mix', name: 'Puran Poli Mix', category: 'Sweets',
    price: 210, originalPrice: 250, stock: 80, image: '/images/essentials.jpg', status: 'In Stock', tag: 'Ready to Cook',
    region: 'Maharashtra',
    description: 'Making Puran (the sweet lentil stuffing) is tedious. We have simplified it! This dehydrated mix of cooked Chana Dal, Jaggery, Cardamom, and Nutmeg just needs hot water to rehydrate into the perfect, authentic Puran for your Holi or Gudi Padwa celebrations.',
    ingredients: ['Chana Dal', 'Organic Jaggery', 'Cardamom', 'Nutmeg', 'Dry Ginger Powder'],
    shelfLife: '6 Months', weight: '400g'
  },

  // Papad
  { 
    id: 4, slug: 'udad-papad', name: 'Udad Papad', category: 'Papad', 
    price: 110, originalPrice: null, stock: 89, image: '/images/udad_papad.jpg', status: 'In Stock', tag: 'Handmade',
    region: 'Vidarbha',
    description: 'Crisp, peppery, and rolled entirely by hand by village artisans. Unlike machine-made papads, these retain a beautiful rustic texture. Roasted on an open flame or deep-fried, they are the mandatory crunch alongside a simple Varan Bhaat meal.',
    ingredients: ['Urad Dal Flour', 'Black Pepper', 'Papad Khar', 'Hing (Asafoetida)', 'Salt'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 117, slug: 'rice-papad', name: 'Rice Papad', category: 'Papad',
    price: 130, originalPrice: 150, stock: 50, image: '/images/udad_papad.jpg', status: 'In Stock', tag: 'Light Snack',
    region: 'Konkan',
    description: 'Thin, snow-white, and incredibly delicate. Made from fermented rice batter steamed on cloth and sun-dried. When fried, they expand rapidly into airy, melt-in-the-mouth crisps. A coastal staple.',
    ingredients: ['Rice Flour', 'Salt', 'Cumin'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 118, slug: 'sabudana-papad', name: 'Sabudana Papad', category: 'Papad',
    price: 140, originalPrice: null, stock: 70, image: '/images/udad_papad.jpg', status: 'In Stock', tag: 'Fasting (Upvas)',
    region: 'Maharashtra',
    description: 'The ultimate fasting comfort food. Tapioca pearls (Sabudana) cooked and dried into round discs. They fry into wonderfully bubbly, crunchy, and slightly chewy papads that make Ekadashi fasts something to look forward to.',
    ingredients: ['Sago (Sabudana)', 'Rock Salt (Sendha Namak)'],
    shelfLife: '12 Months', weight: '200g'
  },
  {
    id: 119, slug: 'nachni-papad', name: 'Nachni Papad', category: 'Papad',
    price: 150, originalPrice: null, stock: 40, image: '/images/udad_papad.jpg', status: 'In Stock', tag: 'Healthy',
    region: 'Western Ghats',
    description: 'A deeply earthy, dark brown papad made from Finger Millet (Ragi). Highly nutritious, rich in calcium, and possessing a unique, slightly nutty flavor. A healthy alternative to traditional papads.',
    ingredients: ['Ragi (Nachni) Flour', 'Rice Flour', 'Salt', 'Sesame Seeds'],
    shelfLife: '12 Months', weight: '200g'
  },

  // Flours & Ready to Cook
  {
    id: 120, slug: 'metkut', name: 'Metkut', category: 'Ready to Cook',
    price: 160, originalPrice: 190, stock: 65, image: '/images/thalipeeth.jpg', status: 'In Stock', tag: 'Comfort Food',
    region: 'Pune & Desh',
    description: 'The ultimate Maharashtrian comfort dust! A highly aromatic, complex roasted powder made from wheat, rice, assorted lentils, and warming spices. Mixed with hot rice and a generous dollop of pure ghee (Metkut Bhaat), it is the most soothing meal for a rainy day or an upset stomach.',
    ingredients: ['Wheat', 'Rice', 'Chana Dal', 'Urad Dal', 'Mustard Seeds', 'Cumin', 'Fenugreek', 'Turmeric'],
    shelfLife: '9 Months', weight: '200g'
  },
  { 
    id: 13, slug: 'thalipeeth-bhajani', name: 'Thalipeeth Bhajani', category: 'Ready to Cook', 
    price: 150, originalPrice: null, stock: 55, image: '/images/thalipeeth.jpg', status: 'In Stock', tag: 'Nutritious',
    region: 'Desh (Western Maharashtra)',
    description: 'The ultimate Maharashtrian comfort breakfast. We carefully wash, dry-roast, and stone-grind over 7 different grains, lentils, and spices to create this robust, savory flour. Add onions, coriander, and pat it onto a griddle for a crispy, highly nutritious Thalipeeth.',
    ingredients: ['Jowar', 'Bajra', 'Wheat', 'Rice', 'Chana Dal', 'Urad Dal', 'Coriander Seeds', 'Cumin'],
    shelfLife: '6 Months', weight: '500g'
  },
  { 
    id: 11, slug: 'modak-mix', name: 'Modak Mix', category: 'Ready to Cook', 
    price: 160, originalPrice: null, stock: 85, image: '/images/modak_mix.jpg', status: 'In Stock', tag: 'Quick prep',
    region: 'Ratnagiri, Konkan',
    description: 'Making the perfect Ukad (rice dough) for Ukadiche Modak is an art. Our pre-sifted, ultra-fine scented rice flour mix ensures your modaks turn out soft, translucent, and never crack while steaming. Just add hot water and knead!',
    ingredients: ['Fragrant Indrayani Rice Flour', 'Pinch of Salt', 'A2 Ghee Powder'],
    shelfLife: '6 Months', weight: '400g'
  },
  { 
    id: 12, slug: 'dashami-mix', name: 'Dashami Mix', category: 'Ready to Cook', 
    price: 130, originalPrice: null, stock: 45, image: '/images/dashami_mix.jpg', status: 'In Stock', tag: 'Quick prep',
    region: 'Pune',
    description: 'Dashami is a sweet, soft, milk-and-jaggery flatbread perfect for long journeys or lunchboxes. Our ready-mix blends premium wheat flour with organic jaggery powder and cardamom. Just add milk, roll, and roast!',
    ingredients: ['Whole Wheat Flour', 'Organic Jaggery Powder', 'Cardamom', 'Nutmeg'],
    shelfLife: '6 Months', weight: '350g'
  },
  {
    id: 121, slug: 'nachni-flour', name: 'Nachni', category: 'Flours',
    price: 85, originalPrice: null, stock: 150, image: '/images/essentials.jpg', status: 'In Stock', tag: 'High Calcium',
    region: 'Western Ghats',
    description: 'Pure, stone-ground Finger Millet flour. Essential for traditional Nachni Bhakri. Naturally gluten-free and packed with calcium, it is a rural superfood that provides immense stamina for farm labor.',
    ingredients: ['100% Finger Millet (Ragi)'],
    shelfLife: '6 Months', weight: '1 kg'
  },
  {
    id: 122, slug: 'jowar-flour', name: 'Jowar', category: 'Flours',
    price: 75, originalPrice: null, stock: 200, image: '/images/essentials.jpg', status: 'In Stock', tag: 'Staple',
    region: 'Marathwada & Solapur',
    description: 'Sorghum flour, the absolute daily staple of rural Maharashtra. Stone-ground for a slightly coarse texture, it yields incredibly soft, puffed Jowar Bhakris that pair perfectly with spicy curries or simple Pitla.',
    ingredients: ['100% Sorghum (Jowar)'],
    shelfLife: '3 Months', weight: '1 kg'
  },
  {
    id: 123, slug: 'bajra-flour', name: 'Bajra', category: 'Flours',
    price: 70, originalPrice: null, stock: 180, image: '/images/essentials.jpg', status: 'In Stock', tag: 'Winter Staple',
    region: 'Khandesh',
    description: 'Pearl Millet flour. A heat-producing, deeply earthy flour used exclusively in winters. A thick, ghee-slathered Bajra Bhakri served with Baingan Bharta (Vangyache Bharit) is a legendary Khandeshi winter meal.',
    ingredients: ['100% Pearl Millet (Bajra)'],
    shelfLife: '3 Months', weight: '1 kg'
  },
  {
    id: 124, slug: 'multigrain-flour', name: 'Multigrain', category: 'Flours',
    price: 110, originalPrice: 130, stock: 100, image: '/images/essentials.jpg', status: 'In Stock', tag: 'Healthy',
    region: 'Maharashtra',
    description: 'A modern adaptation of rural wisdom. We blend Jowar, Bajra, Wheat, Ragi, and Soybean to create a highly nutritious, diabetic-friendly flour perfect for daily chapatis or bhakris.',
    ingredients: ['Wheat', 'Jowar', 'Bajra', 'Ragi', 'Soybean'],
    shelfLife: '3 Months', weight: '1 kg'
  },
];
