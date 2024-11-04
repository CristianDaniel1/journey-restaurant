import { create } from 'zustand';
import { type CartSelection as FoodType, Menu } from '../types.ts';

interface Cart {
  cartItems: FoodType[];
  isOpen: boolean;

  toggleShowCart: () => void;
  hideCart: () => void;
  addToCart: (food: Menu) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<Cart>((set, get) => {
  return {
    cartItems: [],
    isOpen: false,
    toggleShowCart: () => {
      set(state => ({ isOpen: !state.isOpen }));
    },

    hideCart: () => set({ isOpen: false }),
    addToCart: food => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];

      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === food.id
      );

      if (existingItemIndex > -1) {
        const existingItem = updatedCartItems[existingItemIndex];

        if (existingItem.quantity >= 20) return;

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        updatedCartItems[existingItemIndex] = updatedItem;
      } else {
        updatedCartItems.push({ ...food, quantity: 1 });
      }

      set({ cartItems: updatedCartItems });
    },

    removeItem: id => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];

      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === id
      );

      const existingItem = updatedCartItems[existingItemIndex];

      if (existingItem.quantity === 1) {
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };

        updatedCartItems[existingItemIndex] = updatedItem;
      }

      set({ cartItems: updatedCartItems });
    },
  };
});
