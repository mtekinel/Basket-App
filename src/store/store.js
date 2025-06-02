import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,  //state.products olarak alınır
    cart: cartReducer,
  },
});
