'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/utils/currency';
import { mockProducts } from '@/data/mockProducts';

const categories = [
  { name: 'Festive Specials', items: ['Bhajani Chakli', 'Sweet Shankarpali', 'Karanji', 'Besan Ladoo', 'Poha Chivda'] },
  { name: 'Papad', items: ['Udad Papad', 'Rice Papad', 'Sabudana Papad', 'Nachni Papad'] },
  { name: 'Chutneys', items: ['Shengdana Chutney', 'Lasun Chutney', 'Dry Coconut Chutney', 'Til Chutney'] },
  { name: 'Masalas', items: ['Goda Masala', 'Kala Masala', 'Malvani Masala', 'Kolhapuri Masala'] },
  { name: 'Ready to Cook', items: ['Metkut', 'Thalipeeth Bhajani', 'Modak Mix', 'Dashami Mix'] },
  { name: 'Snacks', items: ['Bakarwadi', 'Sandge', 'Kurdai', 'Fryums', 'Bhadang'] },
  { name: 'Sweets', items: ['Besan Ladoo', 'Dink Ladoo', 'Amba Barfi', 'Puran Poli Mix'] },
  { name: 'Flours', items: ['Nachni', 'Jowar', 'Bajra', 'Multigrain'] },
];

export default function Shop() {
  const t = useTranslations('Shop');
  const messages = useMessages() as any;
  const addItem = useCartStore((state) => state.addItem);
  const currency = useCartStore((state) => state.currency);
  
  const getCat = (name: string) => messages?.Shop?.categories?.[name] ? t(`categories.${name}`) : name;
  const getProd = (name: string) => messages?.Shop?.products?.[name] ? t(`products.${name}`) : name;

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addItem({
      id: product.id.toString(),
      name: getProd(product.name),
      slug: product.name.toLowerCase().replace(/ /g, '-'),
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen">
      
      {/* Shop Header */}
      <div className="bg-[var(--color-brand-green)] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-mono text-white mb-6">{t('title')}</h1>
          <p className="text-[var(--color-brand-cream)]/80 text-lg max-w-2xl mx-auto font-light tracking-wide">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <h3 className="text-sm tracking-[0.2em] text-[var(--color-brand-saffron)] uppercase font-bold mb-8 border-b border-[var(--color-brand-gold)]/30 pb-4">
              {t('filters')}
            </h3>
            
            <div className="space-y-8">
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <h4 className="font-mono text-[var(--color-brand-green)] text-xl mb-3">{getCat(cat.name)}</h4>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <Link href={`#`} className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-brand-saffron)] transition-colors">
                          {getProd(item)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8 border-b border-[var(--color-brand-gold)]/30 pb-4">
            <span className="text-sm text-[var(--color-muted-foreground)]"></span>
            <select className="bg-transparent text-sm border border-[var(--color-brand-gold)]/50 rounded-sm px-4 py-2 text-[var(--color-brand-green)] focus:outline-none focus:border-[var(--color-brand-saffron)]">
              <option>{t('sort')}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/shop/${product.slug}`} className="block relative h-80 w-full overflow-hidden rounded-sm mb-4 shadow-md group-hover:shadow-xl transition-shadow bg-gray-100">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-white/90 text-[var(--color-brand-green)] px-6 py-2 uppercase tracking-wider text-xs font-bold hover:bg-[var(--color-brand-saffron)] hover:text-white transition-colors rounded-sm shadow-lg"
                    >
                      {t('quick_add')}
                    </button>
                  </div>
                </Link>
                
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-brand-saffron)] font-semibold block mb-1">
                    {getCat(product.category)}
                  </span>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-lg font-mono text-[var(--color-brand-green)] mb-1 group-hover:text-[var(--color-brand-saffron)] transition-colors">
                      {getProd(product.name)}
                    </h3>
                  </Link>
                  <span className="text-sm font-semibold text-[var(--color-muted-foreground)]">
                    {formatPrice(product.price, currency)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
