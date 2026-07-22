'use client';

import { useCartStore } from '@/store/useCartStore';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { formatPrice } from '@/utils/currency';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal, clearCart, currency } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'IN',
    state: '',
    pincode: '',
    paymentMethod: 'COD'
  });

  const [isHuman, setIsHuman] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // If cart is empty and not ordered successfully, redirect to shop
  if (items.length === 0 && !orderSuccess) {
    router.push('/shop');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          shippingDetails: formData,
          paymentMethod: formData.paymentMethod,
          totalAmount: getCartTotal()
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setOrderSuccess(true);
        clearCart();
      } else {
        alert(data.error || 'Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Something went wrong during checkout.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-[#faf9f6]">
        <div className="bg-white p-10 rounded-sm shadow-xl border border-[var(--color-brand-gold)]/30 text-center max-w-lg mx-auto">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-mono text-[var(--color-brand-green)] mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for ordering with Aadaksha. Your authentic Maharashtrian delicacies are being prepared with love and will be shipped soon.
          </p>
          <button 
            onClick={() => router.push('/shop')}
            className="bg-[var(--color-brand-saffron)] text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-[#c25e14] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-mono text-[var(--color-brand-green)] mb-10 text-center md:text-left">Secure Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20">
              
              <h3 className="text-xl font-mono text-[var(--color-brand-green)] mb-6 border-b border-gray-100 pb-2">Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Country</label>
                  <select 
                    name="country" 
                    value={formData.country} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]"
                  >
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex justify-between">
                    <label className="block text-sm text-gray-600 mb-1">
                      Phone Number {formData.country === 'IN' && <span className="text-red-500">*</span>}
                    </label>
                    {formData.country === 'IN' && (
                      <span className="text-xs text-[var(--color-brand-green)] font-semibold flex items-center gap-1">
                        Required for WhatsApp Delivery Updates
                      </span>
                    )}
                  </div>
                  <input 
                    required={formData.country === 'IN'} 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" 
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Full Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    {formData.country === 'IN' ? 'State' : 'Province / Region'}
                  </label>
                  <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    {formData.country === 'IN' ? 'PIN Code' : 'ZIP / Postal Code'}
                  </label>
                  <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full border border-gray-200 rounded-sm p-3 text-gray-900 bg-white focus:outline-none focus:border-[var(--color-brand-saffron)]" />
                </div>
              </div>

              <h3 className="text-xl font-mono text-[var(--color-brand-green)] mb-6 border-b border-gray-100 pb-2">Payment Method</h3>
              <div className="space-y-4 mb-8">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="paymentMethod" value="COD" checked={formData.paymentMethod === 'COD'} onChange={handleInputChange} className="accent-[var(--color-brand-saffron)]" />
                  <span className="font-semibold text-gray-700">Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 opacity-60">
                  <input type="radio" name="paymentMethod" value="ONLINE" disabled className="accent-[var(--color-brand-saffron)]" />
                  <span className="font-semibold text-gray-700">Online Payment (Coming Soon)</span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !isHuman}
                className="w-full bg-[var(--color-brand-green)] text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-brand-saffron)] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : `Place Order (${formatPrice(getCartTotal(), currency)})`}
              </button>
              
              {!isHuman && (
                <p className="text-center text-xs text-red-500 mt-2 font-medium">Please verify you are human before placing the order.</p>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[var(--color-brand-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-brand-gold)]/20 sticky top-24">
              <h3 className="text-xl font-mono text-[var(--color-brand-green)] mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 pr-4">{item.quantity} x {item.name}</span>
                    <span className="font-medium text-gray-800">{formatPrice(item.price * item.quantity, currency)}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal(), currency)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="font-bold text-[var(--color-brand-green)]">Total</span>
                <span className="text-2xl font-bold text-[var(--color-brand-saffron)]">
                  {formatPrice(getCartTotal(), currency)}
                </span>
              </div>

              {/* Mock Captcha Component */}
              <div className="border border-gray-200 bg-white p-4 rounded-sm flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-3">
                  <div 
                    onClick={() => setIsHuman(true)}
                    className={`w-6 h-6 border-2 flex items-center justify-center cursor-pointer rounded-sm transition-colors ${isHuman ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-emerald-500'}`}
                  >
                    {isHuman && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-sm font-medium text-gray-700 select-none">Verify you are human</span>
                </div>
                <ShieldCheck className="w-6 h-6 text-gray-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
