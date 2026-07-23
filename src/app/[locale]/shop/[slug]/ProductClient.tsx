'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, ArrowLeft, ShieldCheck, Truck, Leaf, MapPin } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/utils/currency';
import { Product } from '@/data/mockProducts';
import { useTranslations } from 'next-intl';

export default function ProductClient({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
  const t = useTranslations('Shop');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const currency = useCartStore((state) => state.currency);

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  };

  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 mt-4">
          <Link href="/" className="hover:text-[var(--color-brand-saffron)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[var(--color-brand-saffron)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-brand-green)] font-medium">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white shadow-2xl">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3 text-[var(--color-brand-saffron)] text-xs font-bold uppercase tracking-widest">
              <span>{product.category}</span>
              {product.region && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {product.region}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-mono text-[var(--color-brand-green)] mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-semibold text-gray-900">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              {product.description}
            </p>

            <div className="bg-white border border-[var(--color-brand-gold)]/20 rounded-sm p-6 mb-8 shadow-sm">
              <h3 className="text-sm font-bold text-[var(--color-brand-green)] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Product Details</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3"><span className="font-semibold text-gray-900 w-24">Ingredients:</span> <span>{product.ingredients.join(', ')}</span></li>
                <li className="flex gap-3"><span className="font-semibold text-gray-900 w-24">Shelf Life:</span> <span>{product.shelfLife}</span></li>
                <li className="flex gap-3"><span className="font-semibold text-gray-900 w-24">Weight:</span> <span>{product.weight}</span></li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-[var(--color-brand-gold)]/50 rounded-sm bg-white overflow-hidden h-14 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  readOnly
                  className="flex-1 text-center font-bold text-[var(--color-brand-green)] bg-transparent focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-saffron)] text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-colors rounded-sm shadow-xl disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-5 h-5" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-brand-gold)]/30 pt-8">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[var(--color-brand-saffron)]" />
                <span className="text-xs text-gray-600 font-medium">100% Authentic</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Leaf className="w-6 h-6 text-[var(--color-brand-saffron)]" />
                <span className="text-xs text-gray-600 font-medium">No Preservatives</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-6 h-6 text-[var(--color-brand-saffron)]" />
                <span className="text-xs text-gray-600 font-medium">Worldwide Shipping</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-[var(--color-brand-gold)]/20 pt-16">
            <h2 className="text-3xl font-mono text-[var(--color-brand-green)] text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link href={`/shop/${p.slug}`} key={p.id} className="group cursor-pointer">
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm mb-4 shadow-md group-hover:shadow-xl transition-shadow bg-gray-100">
                    <Image 
                      src={p.image} 
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-mono text-[var(--color-brand-green)] mb-1 group-hover:text-[var(--color-brand-saffron)] transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                    {formatPrice(p.price, currency)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
