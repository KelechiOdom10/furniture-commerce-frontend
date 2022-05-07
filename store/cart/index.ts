import { isBrowser } from "@utils/isBrowser";
import create from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  total: number;
  quantity: number;
  getTotalPrice: () => number;
  getTotalCartItems: () => number;
  isCartEmpty: () => boolean;
  addItem: (item: CartItem, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, quantity: number) => void;
  increaseQuantity: (id: string, quantity: number) => void;
  decreaseQuantity: (id: string, quantity: number) => void;
  getCartItem: (id: string) => CartItem | undefined;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  total: 0,
  quantity: 0,
  getTotalPrice: () =>
    get().cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
  getTotalCartItems: () =>
    get().cart.reduce((acc, cur) => acc + cur.quantity, 0),
  isCartEmpty: () => get().cart.length === 0,
  addItem: (item, quantity = 1) => {
    const cart = get().cart;
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      get().updateItem(item.id, existingItem.quantity + quantity);
    } else {
      set(state => ({
        ...state,
        cart: [...state.cart, { ...item, quantity }],
        total: state.total + item.price * quantity,
        quantity: state.quantity + quantity,
      }));
    }
  },
  removeItem: id => {
    set(state => {
      const cartItem = get().getCartItem(id)!;
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== id),
        total: state.total - cartItem.price * cartItem.quantity,
        quantity: state.quantity - cartItem.quantity,
      };
    });
  },
  updateItem: (id, quantity) => {
    if (quantity === 0) {
      get().removeItem(id);
    } else {
      set(state => {
        const newCart = [...state.cart].map(cartItem => {
          if (cartItem.id === id) {
            cartItem.quantity = quantity;
          }
          return cartItem;
        });
        return {
          cart: newCart,
          total: state.getTotalPrice(),
          quantity: state.getTotalCartItems(),
        };
      });
    }
  },
  increaseQuantity: (id, quantity) => {
    get().updateItem(id, quantity + 1);
  },
  decreaseQuantity: (id, quantity) => {
    quantity === 1 ? get().removeItem(id) : get().updateItem(id, quantity - 1);
  },
  getCartItem: id => get().cart.find(cartItem => cartItem.id === id),
  clearCart: () => set({ cart: [], total: 0, quantity: 0 }),
}));

if (isBrowser) {
  //@ts-ignore
  const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: "Form fields",
  });
  connection?.init(useCartStore.getState());

  let isUpdateFromDevtools = false;
  connection?.subscribe((evt: { type: string; state: string }) => {
    if (evt.type === "DISPATCH") {
      const newState = JSON.parse(evt.state);
      isUpdateFromDevtools = true;
      useCartStore.setState(newState);
      isUpdateFromDevtools = false;
    }
  });

  useCartStore.subscribe(newState => {
    if (!isUpdateFromDevtools) {
      connection?.send("State", newState);
    }
  });
}

export default useCartStore;
