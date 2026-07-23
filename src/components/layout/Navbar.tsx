'use client';

import Link from 'next/link';
import { Search, ShoppingBag, Menu, User, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [mounted, setMounted] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());
  const currency = useCartStore((state) => state.currency);
  const setCurrency = useCartStore((state) => state.setCurrency);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image src="/images/logo.jpg" alt="Aadaksha Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold tracking-widest uppercase text-[var(--color-brand-green)] hover:text-[var(--color-brand-saffron)] transition-colors">
                  Aadaksha
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-saffron)] mt-[-2px]">
                  Authentic Maharashtrian
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shop" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] transition-colors">
                {t('shop')}
              </Link>
              <Link href="/explore" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] transition-colors">
                {t('explore')}
              </Link>
              <Link href="/recipes" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] transition-colors">
                Recipes
              </Link>
              <Link href="/our-story" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] transition-colors">
                {t('about')}
              </Link>
            </div>
          </div>

          {/* Icons & Language */}
          <div className="flex items-center space-x-4 md:space-x-6 h-full">
            
            {/* Language Switcher (Desktop) */}
            <div className="relative group h-full hidden md:flex items-center">
              <button className="text-xs font-bold tracking-widest uppercase hover:text-[var(--color-brand-saffron)] flex items-center gap-1 transition-colors">
                <Globe className="w-4 h-4" /> EN
              </button>
              <div className="absolute top-full right-0 mt-0 pt-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white border border-[var(--color-brand-gold)]/30 rounded-sm shadow-xl flex flex-col py-2 w-36">
                  <a href="/en" className="px-4 py-2 text-xs font-medium hover:bg-[var(--color-brand-cream)] text-gray-800 transition-colors">English</a>
                  <a href="/mr" className="px-4 py-2 text-xs font-medium hover:bg-[var(--color-brand-cream)] text-gray-800 transition-colors">मराठी (Marathi)</a>
                  <a href="/hi" className="px-4 py-2 text-xs font-medium hover:bg-[var(--color-brand-cream)] text-gray-800 transition-colors">हिंदी (Hindi)</a>
                </div>
              </div>
            </div>

            {/* Currency Switcher (Desktop) */}
            <div className="relative group h-full hidden md:flex items-center">
              <button className="text-xs font-bold tracking-widest uppercase hover:text-[var(--color-brand-saffron)] flex items-center gap-1 transition-colors">
                {mounted ? currency : 'INR'}
              </button>
              <div className="absolute top-full right-0 mt-0 pt-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white border border-[var(--color-brand-gold)]/30 rounded-sm shadow-xl flex flex-col py-2 w-24">
                  {(['INR', 'USD', 'AED', 'GBP', 'AUD'] as const).map((curr) => (
                    <button 
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className="px-4 py-2 text-xs text-left font-medium hover:bg-[var(--color-brand-cream)] text-gray-800 transition-colors"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button aria-label="Search" className="hover:text-[var(--color-brand-saffron)] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/account" aria-label="Account" className="hover:text-[var(--color-brand-saffron)] transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" aria-label="Cart" className="relative hover:text-[var(--color-brand-saffron)] transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-brand-saffron)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden hover:text-[var(--color-brand-saffron)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-[var(--color-brand-gold)]/20 p-5 flex flex-col gap-4">
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-800">{t('shop')}</Link>
          <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-800">{t('explore')}</Link>
          <Link href="/recipes" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-800">Recipes</Link>
          <Link href="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-gray-800">{t('about')}</Link>
          
          <div className="h-px bg-gray-200 my-2" />
          
          <div className="flex flex-col gap-3">
            <span className="text-xs text-gray-500 font-bold uppercase">Language</span>
            <div className="flex gap-4">
              <a href="/en" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] text-gray-800">EN</a>
              <a href="/mr" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] text-gray-800">MR</a>
              <a href="/hi" className="text-sm font-medium hover:text-[var(--color-brand-saffron)] text-gray-800">HI</a>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-2" />

          <div className="flex flex-col gap-3">
            <span className="text-xs text-gray-500 font-bold uppercase">Currency</span>
            <div className="flex flex-wrap gap-4">
              {(['INR', 'USD', 'AED', 'GBP', 'AUD'] as const).map((curr) => (
                <button 
                  key={curr}
                  onClick={() => {
                    setCurrency(curr);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm font-medium ${currency === curr ? 'text-[var(--color-brand-saffron)] font-bold' : 'text-gray-800'}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
