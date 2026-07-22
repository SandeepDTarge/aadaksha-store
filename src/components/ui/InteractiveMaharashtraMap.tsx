'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const mapHotspots = [
  {
    id: 'konkan',
    name: 'Konkan Coast',
    districts: 'Mumbai, Thane, Raigad, Ratnagiri, Sindhudurg',
    top: '55%',
    left: '12%',
    specialties: ['Malvani Masala', 'Kokum', 'Mango', 'Cashews'],
    color: 'var(--color-brand-saffron)'
  },
  {
    id: 'khandesh',
    name: 'Khandesh',
    districts: 'Nashik, Jalgaon, Dhule, Nandurbar',
    top: '20%',
    left: '30%',
    specialties: ['Kala Masala', 'Udad Papad', 'Shengdana Chutney'],
    color: 'var(--color-brand-gold)'
  },
  {
    id: 'desh',
    name: 'Pune & Desh',
    districts: 'Pune, Satara, Solapur, Sangli',
    top: '50%',
    left: '30%',
    specialties: ['Goda Masala', 'Puran Poli Mix', 'Bakarwadi'],
    color: 'var(--color-brand-saffron)'
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    districts: 'Kolhapur District',
    top: '80%',
    left: '25%',
    specialties: ['Kolhapuri Masala', 'Organic Jaggery', 'Lavangi Mirchi'],
    color: 'var(--color-brand-gold)'
  },
  {
    id: 'marathwada',
    name: 'Marathwada',
    districts: 'Chh. Sambhajinagar, Nanded, Latur, Beed',
    top: '55%',
    left: '50%',
    specialties: ['Jowar Flour', 'Peanut Chutney', 'Hurda'],
    color: 'var(--color-brand-saffron)'
  },
  {
    id: 'vidarbha',
    name: 'Vidarbha',
    districts: 'Nagpur, Amravati, Chandrapur, Gadchiroli',
    top: '40%',
    left: '80%',
    specialties: ['Saoji Masala', 'Orange Barfi', 'Tarri Poha'],
    color: 'var(--color-brand-gold)'
  }
];

export default function InteractiveMaharashtraMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="w-full relative bg-[#0a1913] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        
        <div className="text-center mb-12 relative z-20">
          <span className="text-[var(--color-brand-saffron)] text-sm tracking-[0.3em] uppercase font-bold mb-3 block">
            Interactive Map
          </span>
          <h2 className="text-3xl md:text-5xl font-mono text-white mb-6">
            The Flavors of Maharashtra
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hover over the glowing regions to discover the authentic spices and delicacies that originate from the diverse landscapes of our state.
          </p>
        </div>

        {/* Map Container - Aspect-video perfectly matches the 16:9 map image. No overflow-hidden so tooltips can float outside */}
        <div className="relative w-full aspect-video bg-black/20 rounded-xl border border-[var(--color-brand-gold)]/20 shadow-2xl max-w-5xl mx-auto">
          
          {/* Background Map Image */}
          <Image 
            src="/images/map_bg.jpg" 
            alt="Map of Maharashtra"
            fill
            className="object-cover opacity-80 mix-blend-screen rounded-xl"
            priority
          />

          {/* Hotspots */}
          {mapHotspots.map((region) => (
            <div 
              key={region.id}
              className="absolute z-10"
              style={{ top: region.top, left: region.left }}
              onMouseEnter={() => setActiveRegion(region.id)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              {/* Pulsing Dot */}
              <div className="relative flex items-center justify-center cursor-pointer">
                <motion.div 
                  className="absolute w-12 h-12 rounded-full border-2 border-white/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div 
                  className="w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ backgroundColor: region.color }}
                />
              </div>

              {/* Hover Card */}
              <AnimatePresence>
                {activeRegion === region.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute ${Number(region.top.replace('%','')) > 60 ? 'bottom-8' : 'top-8'} left-1/2 -translate-x-1/2 w-64 glass-dark rounded-lg p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-[var(--color-brand-gold)]/30 pointer-events-auto z-50`}
                  >
                    <h3 className="text-xl font-bold font-mono text-white mb-1">
                      {region.name}
                    </h3>
                    <p className="text-[10px] text-[var(--color-brand-saffron)] uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                      {region.districts}
                    </p>
                    <p className="text-xs text-gray-300 uppercase tracking-widest font-semibold mb-3">Famous For:</p>
                    <ul className="space-y-2 mb-4">
                      {region.specialties.map((item, idx) => (
                        <li key={idx} className="text-sm text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/shop?category=${region.id}`}
                      className="block w-full text-center bg-white/10 hover:bg-[var(--color-brand-saffron)] text-white text-xs font-bold uppercase tracking-wider py-2 rounded-sm transition-colors border border-white/20"
                    >
                      Shop {region.name}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
