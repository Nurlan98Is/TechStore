import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/model/cartSlice";
import wishListReducer from "@/features/open-wishlist/model/wishListSlice";
import {TypeOf} from "zod";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishListReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>