import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/model/cartSlice";
import wishListReducer from "@/features/open-wishlist/model/wishListSlice";
import totalSumReducer from "@/features/calculateTotalSum/modal/calculateTotalSumSlice";
import userReducer from "@/features/user-access/modal/userSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishListReducer,
        totalSum: totalSumReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>