import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-green)] text-white pt-16 pb-8 border-t border-[var(--color-brand-gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-brand-gold)]/50 shadow-md">
                <Image src="/images/logo.jpg" alt="Aadaksha Logo" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[var(--color-brand-gold)]">
                Aadaksha
              </h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Authentic Maharashtrian Foods. Preserving the heritage, culture, and traditional taste of Maharashtra for the world.
            </p>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--color-brand-saffron)]">
              Shop
            </h3>
            <ul className="space-y-3">
              <li><Link href="/category/pickles" className="text-sm text-gray-300 hover:text-white transition-colors">Pickles & Chutneys</Link></li>
              <li><Link href="/category/masalas" className="text-sm text-gray-300 hover:text-white transition-colors">Spices & Masalas</Link></li>
              <li><Link href="/category/snacks" className="text-sm text-gray-300 hover:text-white transition-colors">Traditional Snacks</Link></li>
              <li><Link href="/category/sweets" className="text-sm text-gray-300 hover:text-white transition-colors">Festive Sweets</Link></li>
            </ul>
          </div>
          
          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--color-brand-saffron)]">
              Explore
            </h3>
            <ul className="space-y-3">
              <li><Link href="/explore" className="text-sm text-gray-300 hover:text-white transition-colors">Explore Maharashtra</Link></li>
              <li><Link href="/recipes" className="text-sm text-gray-300 hover:text-white transition-colors">Authentic Recipes</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Heritage Blog</Link></li>
              <li><Link href="/our-story" className="text-sm text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--color-brand-saffron)]">
              Stay Connected
            </h3>
            <p className="text-xs text-gray-300 mb-4">
              Subscribe to get special offers, free giveaways, and traditional recipes.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-[var(--color-brand-gold)] rounded-l-md"
              />
              <button 
                type="submit" 
                className="bg-[var(--color-brand-saffron)] hover:bg-[#c25e14] text-white px-4 py-2 text-sm font-medium transition-colors rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Aadaksha Foods. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="/shipping" className="text-xs text-gray-400 hover:text-white">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
