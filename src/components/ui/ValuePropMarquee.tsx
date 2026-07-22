'use client';

import { motion } from 'framer-motion';

const values = [
  "🌱 100% Authentic Hand-Pounded Spices",
  "🌾 No Artificial Preservatives",
  "👨‍👩‍👧‍👦 Traditional Family Recipes",
  "⏱️ Ready to Cook in Minutes",
  "💯 Premium Quality Ingredients",
  "✨ Rich Nutritional Value"
];

export default function ValuePropMarquee() {
  return (
    <div className="bg-[var(--color-brand-saffron)] py-4 overflow-hidden relative shadow-inner">
      <div className="flex whitespace-nowrap">
        {/* We duplicate the array to create a seamless infinite scrolling effect */}
        <motion.div 
          className="flex gap-12 px-6"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...values, ...values, ...values].map((value, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-white font-mono font-bold tracking-widest uppercase text-sm md:text-base">
                {value}
              </span>
              {idx !== values.length * 3 - 1 && (
                <span className="text-white/50 text-xl mx-4">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
