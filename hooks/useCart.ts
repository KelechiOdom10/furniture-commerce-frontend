import useCartStore from "store/cart";

export const useCart = () => {
  const cart = useCartStore(state => state.cart);
  const totalAmount = useCartStore(state => state.total);
  const totalCartItems = useCartStore(state => state.quantity);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);
  const getTotalCartItems = useCartStore(state => state.getTotalCartItems);
  const isCartEmpty = useCartStore(state => state.isCartEmpty);
  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  const updateItem = useCartStore(state => state.updateItem);
  const increaseQuantity = useCartStore(state => state.increaseQuantity);
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
  const getCartItem = useCartStore(state => state.getCartItem);
  const clearCart = useCartStore(state => state.clearCart);

  return {
    cart,
    totalAmount,
    totalCartItems,
    getTotalPrice,
    getTotalCartItems,
    isCartEmpty,
    addItem,
    removeItem,
    updateItem,
    increaseQuantity,
    decreaseQuantity,
    getCartItem,
    clearCart,
  };
};
