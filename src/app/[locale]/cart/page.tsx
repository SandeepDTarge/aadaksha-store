'use client';

import { useCartStore } from '@/store/useCartStore';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { formatPrice } from '@/utils/currency';

export default function CartPage() {
  const t = useTranslations('Navigation');
  const [mounted, setMounted] = useState(false);
  
  const { items, updateQuantity, removeItem, getCartTotal, currency } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 max-w-7xl mx-auto flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-brand-green)]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-mono text-[var(--color-brand-green)] mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white shadow-sm rounded-sm border border-[var(--color-brand-gold)]/20">
            <h2 className="text-2xl text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any authentic Maharashtrian delicacies yet.</p>
            <Link 
              href="/shop" 
              className="bg-[var(--color-brand-saffron)] text-white px-8 py-3 uppercase tracking-wider text-sm font-bold hover:bg-[#c25e14] transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white shadow-sm rounded-sm border border-[var(--color-brand-gold)]/20 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--color-brand-cream)] border-b border-[var(--color-brand-gold)]/20 text-[var(--color-brand-green)]">
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Product</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider hidden sm:table-cell">Price</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider text-center">Quantity</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                              <Image 
                                src={item.image || '/images/spices_new.jpg'} 
                                alt={item.name} 
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-[var(--color-brand-green)]">{item.name}</h3>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 text-xs mt-1 flex items-center gap-1 hover:text-red-700 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" /> Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 hidden sm:table-cell text-gray-600">
                          {formatPrice(item.price, currency)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-sm w-24 mx-auto">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-500 hover:text-[var(--color-brand-saffron)] transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-500 hover:text-[var(--color-brand-saffron)] transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-right font-semibold text-[var(--color-brand-green)]">
                          {formatPrice(item.price * item.quantity, currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white shadow-sm rounded-sm border border-[var(--color-brand-gold)]/20 p-6 sticky top-24">
                <h3 className="text-xl font-mono text-[var(--color-brand-green)] border-b border-gray-100 pb-4 mb-4">Order Summary</h3>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(getCartTotal(), currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="font-semibold text-[var(--color-brand-green)]">Total</span>
                    <span className="text-2xl font-bold text-[var(--color-brand-saffron)]">
                      {formatPrice(getCartTotal(), currency)}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">Inclusive of all taxes</p>
                </div>
                
                <Link 
                  href="/checkout"
                  className="w-full bg-[var(--color-brand-green)] text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-[var(--color-brand-saffron)] transition-colors shadow-lg"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                
                <div className="mt-6 flex justify-center items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Secure Payment
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Authentic Products
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
