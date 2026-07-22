'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import InteractiveMaharashtraMap from '@/components/ui/InteractiveMaharashtraMap';

const regions = [
  {
    id: 'konkan',
    name: 'Konkan Coast',
    title: 'The Coastal Heritage',
    description: 'Stretching along the Arabian Sea, the Konkan region is famous for its abundant use of coconut, kokum, and the fiery Malvani Masala. Home to the world-renowned Alphonso mangoes and cashews.',
    specialties: ['Malvani Masala', 'Kokum Agal', 'Cashews', 'Mango Pulp'],
    image: 'https://images.unsplash.com/photo-1596568359556-9761e3895bb7?q=80&w=1000&auto=format&fit=crop', // Replaced by our generated images later if needed
    color: 'from-teal-900 to-[var(--color-brand-green)]'
  },
  {
    id: 'desh',
    name: 'Desh & Kolhapur',
    title: 'The Cultural Heartland',
    description: 'The cultural capital of Maharashtra offers a balanced, subtly sweet and spicy flavor profile.',
    specialties: ['Kolhapuri Masala', 'Organic Jaggery (Gul)', 'Goda Masala', 'Puran Poli Mix'],
    image: '/images/sweets.jpg',
    color: 'from-orange-900 to-[var(--color-brand-saffron)]'
  },
  {
    id: 'khandesh',
    name: 'Khandesh',
    title: 'The Rustic North',
    description: 'A hot and dry region that produces some of the most intense and smoky flavors. Famous for its Kala Masala, peanut-based curries, and perfectly crisp Udad papads.',
    specialties: ['Kala Masala', 'Shengdana Chutney', 'Udad Papad'],
    image: '/images/udad_papad.jpg',
    color: 'from-[var(--color-brand-wood)] to-amber-900'
  },
  {
    id: 'marathwada',
    name: 'Marathwada',
    title: 'The Heartland Heritage',
    description: 'A deeply historical region offering rustic, hearty meals. Famous for its Jowar Bhakris, Hurda parties, and rich peanut and garlic-based chutneys.',
    specialties: ['Jowar Flour', 'Peanut Chutney', 'Hurda', 'Shenga Poli'],
    image: '/images/thalipeeth.jpg',
    color: 'from-amber-900 to-orange-900'
  },
  {
    id: 'vidarbha',
    name: 'Vidarbha',
    title: 'The Eastern Spice Route',
    description: 'Known for the famously fiery Saoji cuisine and the citrusy sweetness of Nagpur oranges. A land of intense curries and unique festive dishes.',
    specialties: ['Saoji Masala', 'Orange Barfi', 'Tarri Poha', 'Nagpuri Vada Bhat'],
    image: '/images/spices_new.jpg',
    color: 'from-red-950 to-red-800'
  }
];

export default function Explore() {
  const t = useTranslations('Explore');

  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen pb-24">
      
      {/* Header */}
      <div className="relative pt-32 pb-24 px-4 overflow-hidden bg-[var(--color-brand-green)]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.4em] text-[var(--color-brand-saffron)] uppercase font-bold mb-6"
          >
            {t('subtitle')}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-mono text-white mb-6 leading-tight"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--color-brand-cream)]/80 text-lg md:text-xl font-light tracking-wide"
          >
            {t('description')}
          </motion.p>
        </div>
      </div>

      {/* Interactive Map Section */}
      <InteractiveMaharashtraMap />

      {/* Regions Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-20">
        <div className="space-y-12">
          {regions.map((region, idx) => (
            <motion.div 
              key={region.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-2xl rounded-sm overflow-hidden border border-[var(--color-brand-gold)]/20`}
            >
              
              {/* Image Half */}
              <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
                <Image 
                  src={region.image} 
                  alt={region.name} 
                  fill 
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${region.color} mix-blend-multiply opacity-60`}></div>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                  <h3 className="text-4xl font-mono drop-shadow-lg">{t(`regions.${region.id}.name`)}</h3>
                </div>
              </div>

              {/* Content Half */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[var(--color-brand-cream)]">
                <span className="text-[var(--color-brand-saffron)] text-xs tracking-[0.2em] uppercase font-bold mb-4">
                  {t(`regions.${region.id}.title`)}
                </span>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {t(`regions.${region.id}.description`)}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-[var(--color-brand-green)] uppercase tracking-wider mb-4 border-b border-[var(--color-brand-gold)]/30 pb-2">
                    {t('specialties_title')}
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--color-brand-saffron)] before:mr-3 before:rounded-full">
                        {t(`regions.${region.id}.spec${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/shop?category=${region.id}`}
                  className="inline-block border border-[var(--color-brand-green)] text-[var(--color-brand-green)] px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[var(--color-brand-green)] hover:text-white transition-all text-center self-start"
                >
                  {t('btn_taste')} {t(`regions.${region.id}.name`)}
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
