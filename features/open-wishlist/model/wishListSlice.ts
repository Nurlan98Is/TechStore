import { createSlice } from '@reduxjs/toolkit';
import {StaticImageData} from "next/image";

interface Wishlist {
    id?: string,
    name?: string,
    description?: string,
    price?: number,
    quantity?: number,
    img?: StaticImageData,
}
type WishlistState = Wishlist[]
const wishListSaveSessionStorage = () => {
    if (typeof window === "undefined") {
        return []
    }
    try {
        const initializedState = sessionStorage.getItem('wishList');
        if (initializedState === null) {
            return []
        } else {
            return JSON.parse(initializedState);
        }
    }
     catch (error) {
        console.warn('Error while initializing wishlist', error)
    }
}
const initialState = wishListSaveSessionStorage();
export const wishlistSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addWishList: (state: WishlistState, action) => {
            const {id, name, price, img, quantity} = action.payload;
            const existItem = state.find(item => item.id === action.payload.id);
            if (existItem) {
                existItem.quantity = 1;
            } else {
                state.push({
                    id,
                    name,
                    price,
                    img
                })
                try {
                    sessionStorage.setItem('wishList', JSON.stringify(state))
                } catch (error) {
                    console.warn('Error while try save wishlist items in session storage', error);
                }
            }
        }
    }
})

export const {addWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;