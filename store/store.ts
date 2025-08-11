import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/model/cartSlice";
import wishListReducer from "@/features/open-wishlist/model/wishListSlice";
import totalSumReducer from "@/features/calculateTotalSum/modal/calculateTotalSumSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishListReducer,
        totalSum: totalSumReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>