import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "types/cart";

export interface cartSlice {
  value: Cart;
}

const initialState: cartSlice = {
  value: { products: [], totalPrice: 0 },
};

const calcPrice = (cartItems: CartItem[]) => {
  let total = 0;
  cartItems.forEach((cartItem) => {
    total += cartItem.price * cartItem.quantity;
  });
  return total;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      const cart = state.value.products as CartItem[];
      const modified: number = cart.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );

      if (modified > -1) {
        state.value.products[modified] = action.payload;
      } else {
        state.value.products.push(action.payload);
      }
      state.value.totalPrice = calcPrice(cart);
    },
    deleteCartItem: (state, action: PayloadAction<string>) => {
      const cart = state.value.products as CartItem[];
      const modified: number = cart.findIndex(
        (cartItem) => cartItem.productId === action.payload
      );
      if (modified > -1) {
        state.value.products.splice(modified, 1);
      }
      state.value.totalPrice = calcPrice(cart);
    },
  },
});

export const { setCartItem, deleteCartItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
