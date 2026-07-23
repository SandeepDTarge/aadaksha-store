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
  { 
    id: 1, slug: 'premium-goda-masala', name: 'Premium Goda Masala', category: 'Masalas', 
    price: 150, originalPrice: 180, stock: 45, image: '/images/spices_new.jpg', status: 'In Stock', tag: 'Bestseller',
    region: 'Pune, Desh',
    description: 'The soul of Maharashtrian vegetarian cooking. Our authentic Goda Masala is traditionally sun-dried and slowly hand-pounded to release the deep, smoky aroma of roasted coconut, sesame seeds, and 18 carefully selected whole spices. Perfect for everyday Amti, Bharli Vangi, or Masale Bhat.',
    ingredients: ['Coriander Seeds', 'Cumin', 'Sesame Seeds', 'Dry Coconut', 'Stone Flower (Dagad Phool)', 'Cloves', 'Cinnamon'],
    shelfLife: '9 Months', weight: '250g'
  },
  { 
    id: 2, slug: 'spicy-lasun-chutney', name: 'Spicy Lasun Chutney', category: 'Chutneys', 
    price: 90, originalPrice: null, stock: 0, image: '/images/lasun_chutney.jpg', status: 'Out of Stock', tag: '',
    region: 'Kolhapur',
    description: 'A fiery, vibrant garlic chutney that packs a true Kolhapuri punch. Made with pungent native garlic and deep red Sankeshwari chilies, this coarse dry chutney is the absolute perfect accompaniment to a hot Vada Pav, Bhakri, or sprinkled over your morning Poha.',
    ingredients: ['Garlic', 'Red Chili Powder', 'Dry Coconut', 'Peanuts', 'Salt', 'Cumin'],
    shelfLife: '6 Months', weight: '100g'
  },
  { 
    id: 3, slug: 'crispy-kurdai', name: 'Crispy Kurdai', category: 'Snacks', 
    price: 200, originalPrice: null, stock: 34, image: '/images/kurdai.jpg', status: 'In Stock', tag: '',
    region: 'Khandesh',
    description: 'A labor of love and a true summer tradition. These intricate, noodle-like dried wheat crisps take days to ferment and press by hand. When deep-fried, they instantly bloom into light, wildly crunchy, snow-white spirals that melt in your mouth.',
    ingredients: ['Fermented Whole Wheat (Gahu)', 'Salt', 'Water'],
    shelfLife: '12 Months', weight: '200g'
  },
  { 
    id: 4, slug: 'handmade-udad-papad', name: 'Udad Papad (Handmade)', category: 'Papad', 
    price: 110, originalPrice: null, stock: 89, image: '/images/udad_papad.jpg', status: 'In Stock', tag: '',
    region: 'Vidarbha',
    description: 'Crisp, peppery, and rolled entirely by hand by village artisans. Unlike machine-made papads, these retain a beautiful rustic texture. Roasted on an open flame or deep-fried, they are the mandatory crunch alongside a simple Varan Bhaat meal.',
    ingredients: ['Urad Dal Flour', 'Black Pepper', 'Papad Khar', 'Hing (Asafoetida)', 'Salt'],
    shelfLife: '12 Months', weight: '200g'
  },
  { 
    id: 5, slug: 'authentic-shewai', name: 'Authentic Vermicelli (Shewai)', category: 'Ready to Cook', 
    price: 120, originalPrice: 140, stock: 50, image: '/images/shevaya.jpg', status: 'In Stock', tag: 'Traditional',
    region: 'Konkan',
    description: 'Traditionally extruded and sun-dried fine wheat vermicelli. Often served as a dessert (Shevaya Kheer) soaked in sweet, cardamom-infused coconut milk during festivals, or prepared as a savory, spiced breakfast upma.',
    ingredients: ['Whole Wheat Flour', 'Water'],
    shelfLife: '12 Months', weight: '500g'
  },
  { 
    id: 6, slug: 'diwali-faral-combo', name: 'Diwali Faral Combo Box', category: 'Combos', 
    price: 999, originalPrice: 1200, stock: 25, image: '/images/faral.jpg', status: 'In Stock', tag: 'Festive',
    region: 'Pune, Maharashtra',
    description: 'Bring the joy of a Maharashtrian Diwali to your home, anywhere in the world. This premium assorted box includes golden, crispy Bhajani Chaklis, sweet coconut Karanjis, spicy Poha Chivda, and rich Besan Ladoos made with pure A2 Ghee.',
    ingredients: ['Bhajani Chakli', 'Poha Chivda', 'Besan Ladoo', 'Karanji', 'Shankarpali'],
    shelfLife: '3 Months', weight: '1.5 kg'
  },
  { 
    id: 7, slug: 'ganpati-faral-combo', name: 'Ganpati Faral Combo', category: 'Combos', 
    price: 850, originalPrice: 1000, stock: 15, image: '/images/festive.jpg', status: 'In Stock', tag: 'Festive',
    region: 'Konkan Coast',
    description: 'Celebrate Ganeshotsav with our curated festive box. Featuring ready-to-steam Ukadiche Modak mix, crunchy Chakli, and sweet, ghee-laden Ladoos to offer as the perfect Naivedya (offering) to Bappa.',
    ingredients: ['Modak Mix', 'Besan Ladoo', 'Chakli', 'Karanji'],
    shelfLife: '3 Months', weight: '1 kg'
  },
  { 
    id: 8, slug: 'batata-papad', name: 'Batata Papad', category: 'Ready to Cook', 
    price: 140, originalPrice: null, stock: 60, image: '/images/udad_papad.jpg', status: 'In Stock', tag: '',
    region: 'Marathwada',
    description: 'A beloved fasting (Upvas) essential. Thin, translucent potato wafers spiked with green chilies and sago (sabudana). Fried to a golden crisp, they are addictive, light, and perfect for snacking.',
    ingredients: ['Potatoes', 'Sago (Sabudana)', 'Green Chilies', 'Rock Salt (Sendha Namak)'],
    shelfLife: '12 Months', weight: '200g'
  },
  { 
    id: 9, slug: 'solapuri-shengdana-chutney', name: 'Solapuri Shengdana Chutney', category: 'Chutneys', 
    price: 110, originalPrice: null, stock: 40, image: '/images/lasun_chutney.jpg', status: 'In Stock', tag: 'Spicy',
    region: 'Solapur',
    description: 'A staple of the hardworking farmers of Solapur. Roasted peanuts are crushed with fiery red chilies, cumin, and garlic to create a deeply nutty, intense dry chutney that transforms a simple Jowar Bhakri into a feast.',
    ingredients: ['Roasted Peanuts', 'Red Chilies', 'Garlic', 'Cumin', 'Salt'],
    shelfLife: '6 Months', weight: '150g'
  },
  { 
    id: 10, slug: 'khandeshi-mango-pickle', name: 'Khandeshi Mango Pickle', category: 'Pickles', 
    price: 180, originalPrice: 200, stock: 30, image: '/images/mango_pickle.jpg', status: 'In Stock', tag: '',
    region: 'Jalgaon, Khandesh',
    description: 'A sharp, pungent, and deeply spiced raw mango pickle. Matured under the harsh Khandeshi sun in stone jars (Bharanis), this pickle uses cold-pressed peanut oil, fenugreek, and mustard seeds for a flavor that takes you straight back to Aji\'s kitchen.',
    ingredients: ['Raw Mango', 'Peanut Oil', 'Mustard Seeds', 'Fenugreek (Methi)', 'Red Chili Powder', 'Turmeric', 'Salt'],
    shelfLife: '12 Months', weight: '300g'
  },
  { 
    id: 11, slug: 'instant-modak-mix', name: 'Instant Modak Mix (Rice Flour)', category: 'Ready to Cook', 
    price: 160, originalPrice: null, stock: 85, image: '/images/modak_mix.jpg', status: 'In Stock', tag: 'Quick prep',
    region: 'Ratnagiri, Konkan',
    description: 'Making the perfect Ukad (rice dough) for Ukadiche Modak is an art. Our pre-sifted, ultra-fine scented rice flour mix ensures your modaks turn out soft, translucent, and never crack while steaming. Just add hot water and knead!',
    ingredients: ['Fragrant Indrayani Rice Flour', 'Pinch of Salt', 'A2 Ghee Powder'],
    shelfLife: '6 Months', weight: '400g'
  },
  { 
    id: 12, slug: 'instant-dashami-mix', name: 'Instant Dashami Mix', category: 'Ready to Cook', 
    price: 130, originalPrice: null, stock: 45, image: '/images/dashami_mix.jpg', status: 'In Stock', tag: 'Quick prep',
    region: 'Pune',
    description: 'Dashami is a sweet, soft, milk-and-jaggery flatbread perfect for long journeys or lunchboxes. Our ready-mix blends premium wheat flour with organic jaggery powder and cardamom. Just add milk, roll, and roast!',
    ingredients: ['Whole Wheat Flour', 'Organic Jaggery Powder', 'Cardamom', 'Nutmeg'],
    shelfLife: '6 Months', weight: '350g'
  },
  { 
    id: 13, slug: 'thalipeeth-bhajani', name: 'Thalipeeth Bhajani (Mixed Grain)', category: 'Ready to Cook', 
    price: 150, originalPrice: null, stock: 55, image: '/images/thalipeeth.jpg', status: 'In Stock', tag: 'Nutritious',
    region: 'Desh (Western Maharashtra)',
    description: 'The ultimate Maharashtrian comfort breakfast. We carefully wash, dry-roast, and stone-grind over 7 different grains, lentils, and spices to create this robust, savory flour. Add onions, coriander, and pat it onto a griddle for a crispy, highly nutritious Thalipeeth.',
    ingredients: ['Jowar', 'Bajra', 'Wheat', 'Rice', 'Chana Dal', 'Urad Dal', 'Coriander Seeds', 'Cumin'],
    shelfLife: '6 Months', weight: '500g'
  },
  { 
    id: 14, slug: 'nachani-pith', name: 'Nachani Pith (Ragi Flour)', category: 'Ready to Cook', 
    price: 90, originalPrice: null, stock: 100, image: '/images/essentials.jpg', status: 'In Stock', tag: 'High Fiber',
    region: 'Western Ghats',
    description: 'Sprouted, roasted, and finely milled Finger Millet (Ragi). Highly prized in the rural hilly regions for its immense calcium and iron content. Perfect for making soft Nachani Bhakris or sweet, warming Satva (porridge) for children.',
    ingredients: ['100% Sprouted Finger Millet (Ragi)'],
    shelfLife: '6 Months', weight: '500g'
  },
  { 
    id: 15, slug: 'authentic-anarase', name: 'Authentic Anarase (Jaggery & Rice)', category: 'Sweets', 
    price: 250, originalPrice: 280, stock: 40, image: '/images/anarase.png', status: 'In Stock', tag: 'Diwali Special',
    region: 'Nashik',
    description: 'A highly technical and deeply traditional sweet. Rice is soaked for three days, dried, ground, and mixed with jaggery to ferment into a dough. Deep-fried with poppy seeds, it results in a porous, crispy, sweet mesh that defines Maharashtrian festivities.',
    ingredients: ['Fermented Rice Flour', 'Organic Jaggery', 'Poppy Seeds (Khas Khas)', 'Ghee'],
    shelfLife: '2 Months', weight: '250g'
  },
  { 
    id: 16, slug: 'pudachi-karanji', name: 'Pudachi Karanji (Layered Sweet)', category: 'Sweets', 
    price: 300, originalPrice: 350, stock: 35, image: '/images/karanji.png', status: 'In Stock', tag: 'Diwali Special',
    region: 'Pune',
    description: 'A masterpiece of culinary architecture. Unlike regular Karanji, Pudachi Karanji features multiple flaky, crispy, ghee-laminated layers (Pud) encasing a rich, sweet stuffing of dry coconut, poppy seeds, and dry fruits.',
    ingredients: ['Refined Wheat Flour (Maida)', 'Dry Coconut', 'Powdered Sugar', 'Poppy Seeds', 'Cardamom', 'A2 Ghee'],
    shelfLife: '2 Months', weight: '250g'
  }
];
