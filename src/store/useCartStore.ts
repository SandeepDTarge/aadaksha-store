import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Currency } from '@/utils/currency';

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      currency: 'INR',
      
      setCurrency: (currency) => set({ currency }),
      
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          const quantityToAdd = item.quantity || 1;
          
          if (existingItem) {
            return {
              items: state.items.map((i) => 
                i.id === item.id 
                  ? { ...i, quantity: i.quantity + quantityToAdd } 
                  : i
              ),
            };
          }
          
          return {
            items: [...state.items, { ...item, quantity: quantityToAdd }],
          };
        });
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((i) => 
            i.id === id 
              ? { ...i, quantity: Math.max(1, quantity) } 
              : i
          ),
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getCartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getCartCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'aadaksha-cart-storage',
    }
  )
);
