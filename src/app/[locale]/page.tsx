'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Calendar, User, ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import ValuePropMarquee from '@/components/ui/ValuePropMarquee';

export default function Home() {
  const t = useTranslations('Home');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* JSON-LD Schemas for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aadaksha",
            "url": "https://aadaksha.com",
            "logo": "https://aadaksha.com/images/logo.png",
            "description": "Authentic Maharashtrian delicacies connecting you back to your motherland."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Aadaksha",
            "url": "https://aadaksha.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aadaksha.com/shop?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <Image 
            src="/images/hero.jpg" 
            alt="Mouth-watering Maharashtrian Thali with Puran Poli and Modak" 
            fill
            className="object-cover object-center scale-105"
            priority
            quality={100}
          />
          {/* Deep Gradient Overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-brand-green)]/90"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="text-[var(--color-brand-saffron)] text-sm tracking-[0.4em] uppercase font-bold border-b border-[var(--color-brand-saffron)] pb-2">
              {t('hero_tag')}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-brand-cream)] mb-6 font-mono leading-[1.1] drop-shadow-2xl whitespace-pre-line"
          >
            {t('hero_title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-3xl text-gray-200 mb-12 font-light tracking-wide max-w-3xl mx-auto drop-shadow-md"
          >
            {t('hero_desc')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/shop" 
              className="px-12 py-5 bg-[var(--color-brand-saffron)] hover:bg-[#c25e14] text-white font-bold rounded-sm tracking-widest uppercase transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(217,108,27,0.5)] w-full sm:w-auto text-sm text-center"
            >
              {t('btn_shop')}
            </Link>
            <Link 
              href="/explore" 
              className="px-12 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold rounded-sm tracking-widest uppercase transition-all shadow-xl w-full sm:w-auto text-sm text-center"
            >
              {t('btn_explore')}
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">{t('scroll')}</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </motion.div>
      </section>

      {/* Dynamic Marquee Section */}
      <ValuePropMarquee />

      {/* Nutritional & Authentic Roots Feature Grid */}
      <section className="py-24 bg-white overflow-hidden border-b border-[var(--color-brand-gold)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-brand-saffron)] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Pure. Authentic. Nutritious.
            </span>
            <h2 className="text-3xl md:text-5xl font-mono text-[var(--color-brand-green)] mb-6 leading-tight">
              Why Choose Aadaksha?
            </h2>
            <div className="w-20 h-1 bg-[var(--color-brand-saffron)] mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe food is medicine. Our products aren't just delicious; they are crafted using ancient methods that preserve their natural nutritional values. No shortcuts, just pure heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-[var(--color-brand-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-[var(--color-brand-gold)]/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-[var(--color-brand-green)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-mono">100% Authentic</h3>
              <p className="text-gray-600 text-sm">
                Sourced directly from the heart of Maharashtra, preserving the original textures and aromas of your childhood.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[var(--color-brand-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-[var(--color-brand-gold)]/30 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-mono">Rich Nutrition</h3>
              <p className="text-gray-600 text-sm">
                Flours like Nachni (Ragi) and Jowar are packed with fiber, calcium, and essential minerals for a healthy lifestyle.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[var(--color-brand-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-[var(--color-brand-gold)]/30 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-[var(--color-brand-saffron)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-mono">Ready to Cook</h3>
              <p className="text-gray-600 text-sm">
                Instant mixes designed for busy lives. Enjoy traditional, home-cooked taste in minutes without the prep work.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[var(--color-brand-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-[var(--color-brand-gold)]/30 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-mono">Zero Preservatives</h3>
              <p className="text-gray-600 text-sm">
                We use natural preservation techniques. No artificial colors, no chemicals—just pure, unadulterated ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent Category Grid Section */}
      <section className="py-32 bg-[var(--color-brand-cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm tracking-[0.3em] text-[var(--color-brand-saffron)] uppercase font-bold mb-4">
              {t('curated')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-mono text-[var(--color-brand-green)]">
              {t('essence')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Faral Card */}
            <motion.div 
              className="relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all"
            >
              <Image 
                src="/images/faral.jpg" 
                alt="Festive Faral" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[var(--color-brand-saffron)] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {t('faral_region')}
                </span>
                <h4 className="text-3xl font-mono text-white mb-3">{t('faral_title')}</h4>
                <p className="text-gray-300 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t('faral_desc')}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/shop/snacks" className="text-white text-sm font-semibold tracking-wider uppercase border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                    {t('faral_link')}
                  </Link>
                  <Link href="/shop/snacks" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--color-brand-saffron)] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c25e14]">
                    Quick View
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Spices Card */}
            <motion.div 
              className="relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all md:mt-16"
            >
              <Image 
                src="/images/spices_new.jpg" 
                alt="Premium Indian Spices" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[var(--color-brand-saffron)] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {t('spices_region')}
                </span>
                <h4 className="text-3xl font-mono text-white mb-3">{t('spices_title')}</h4>
                <p className="text-gray-300 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t('spices_desc')}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/shop/spices" className="text-white text-sm font-semibold tracking-wider uppercase border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                    {t('spices_link')}
                  </Link>
                  <Link href="/shop/spices" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--color-brand-saffron)] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c25e14]">
                    Quick View
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Sweets Card */}
            <motion.div 
              className="relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all"
            >
              <Image 
                src="/images/sweets_new.jpg" 
                alt="Maharashtrian Sweets" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[var(--color-brand-saffron)] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {t('sweets_region')}
                </span>
                <h4 className="text-3xl font-mono text-white mb-3">{t('sweets_title')}</h4>
                <p className="text-gray-300 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t('sweets_desc')}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/shop/sweets" className="text-white text-sm font-semibold tracking-wider uppercase border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                    {t('sweets_link')}
                  </Link>
                  <Link href="/shop/sweets" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--color-brand-saffron)] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c25e14]">
                    Quick View
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Essentials Card */}
            <motion.div 
              className="relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all md:mt-16"
            >
              <Image 
                src="/images/essentials.jpg" 
                alt="Daily Essentials" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[var(--color-brand-saffron)] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {t('essentials_region')}
                </span>
                <h4 className="text-3xl font-mono text-white mb-3">{t('essentials_title')}</h4>
                <p className="text-gray-300 text-sm mb-6 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t('essentials_desc')}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/shop/flours" className="text-white text-sm font-semibold tracking-wider uppercase border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold)] transition-colors">
                    {t('essentials_link')}
                  </Link>
                  <Link href="/shop/flours" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--color-brand-saffron)] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c25e14]">
                    Quick View
                  </Link>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SEO Optimized Emotional Story Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-[var(--color-brand-gold)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Story Text */}
            <div className="lg:w-1/2">
              <span className="text-[var(--color-brand-saffron)] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Connecting To Your Roots
              </span>
              <h2 className="text-3xl md:text-5xl font-mono text-[var(--color-brand-green)] mb-6 leading-tight">
                {t('story_title')}
              </h2>
              <div className="w-20 h-1 bg-[var(--color-brand-saffron)] mb-8"></div>
              
              <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                <p>
                  {t('story_p1')}
                </p>
                <p>
                  {t('story_p2')}
                </p>
              </div>
              
              <Link href="/shop" className="inline-block mt-10 bg-[var(--color-brand-green)] text-white px-8 py-4 uppercase tracking-wider text-sm font-bold hover:bg-[var(--color-brand-saffron)] transition-colors shadow-lg">
                {t('btn_shop_now')}
              </Link>
            </div>

            {/* Emotional Imagery */}
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[500px] md:h-[650px] w-full rounded-sm overflow-hidden shadow-2xl">
                <Image 
                  src="/images/story_aai.jpg" 
                  alt="Traditional Maharashtrian grandmother cooking authentic food in village" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Trust Badges */}
                <div className="absolute bottom-6 right-6 flex gap-4">
                  <div className="bg-white/90 backdrop-blur px-4 py-3 rounded-sm shadow-xl border border-white/50 text-center">
                    <span className="block text-[var(--color-brand-saffron)] font-bold text-xl">100%</span>
                    <span className="text-[10px] font-bold text-gray-700 tracking-widest uppercase">Authentic</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur px-4 py-3 rounded-sm shadow-xl border border-white/50 text-center">
                    <span className="block text-[var(--color-brand-saffron)] font-bold text-xl">Global</span>
                    <span className="text-[10px] font-bold text-gray-700 tracking-widest uppercase">Shipping</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog / Latest from our Kitchen Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[var(--color-brand-saffron)] text-sm tracking-[0.3em] uppercase font-bold mb-3 block">
                Fresh Content
              </span>
              <h2 className="text-3xl md:text-5xl font-mono text-gray-900">
                Latest From Our Kitchen
              </h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-[var(--color-brand-green)] font-semibold uppercase tracking-wider text-sm hover:text-[var(--color-brand-saffron)] transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/spices_new.jpg" 
                  alt="The History of Authentic Goda Masala"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-green)] rounded-sm">
                  Culture & Spices
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 22 Jul 2026</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> Aadaksha Team</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-saffron)] transition-colors line-clamp-2">
                  The History of Authentic Goda Masala
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  Discover the ancient origins of Maharashtra's most beloved spice blend, its unique ingredients, and why it's the secret behind every perfect Maharashtrian curry.
                </p>
                <Link href="/blog/history-of-goda-masala" className="text-[var(--color-brand-green)] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/faral.jpg" 
                  alt="Why Maharashtrian Faral is More Than Just Snacks"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-green)] rounded-sm">
                  Traditions
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15 Jul 2026</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> Aadaksha Team</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-saffron)] transition-colors line-clamp-2">
                  Why Maharashtrian Faral is More Than Just Snacks
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  Beyond the crispy Chaklis and sweet Karanjis lies a beautiful tradition of community cooking, sharing joy, and celebrating heritage across generations.
                </p>
                <Link href="/blog/maharashtrian-faral-emotion" className="text-[var(--color-brand-green)] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/sweets_new.jpg" 
                  alt="Top 5 Sweet Dishes for Ganeshotsav"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-green)] rounded-sm">
                  Festivals
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 10 Jul 2026</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> Sandeep Targe</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-saffron)] transition-colors line-clamp-2">
                  Top 5 Sweet Dishes for Ganeshotsav
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  As we welcome Bappa, explore the most authentic, melt-in-the-mouth sweet delicacies that are an absolute must for Ganeshotsav celebrations.
                </p>
                <Link href="/blog/top-5-sweets-ganeshotsav" className="text-[var(--color-brand-green)] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-brand-green)] font-semibold uppercase tracking-wider text-sm hover:text-[var(--color-brand-saffron)] transition-colors border-b border-[var(--color-brand-green)] pb-1">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
