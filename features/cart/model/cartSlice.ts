import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StaticImageData} from "next/image";
import * as z from "zod";

interface CartItem {
    id: string;
    name: string;
    price: number;
    img: StaticImageData;
    quantity: number;
}

type CartState = CartItem[]
const loadStateFormSessionStorage = (): CartState => {
    if (typeof window === "undefined") {
        return []
    }
    try {
       const serializedState = sessionStorage.getItem('cart')
        if (serializedState === null) {
            return []
        } else {
            return JSON.parse(serializedState) as CartItem[]
        }
    } catch (error) {
        console.warn('Error parsing cart', error)
        return []
    }
}
const initialState = loadStateFormSessionStorage()

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state: CartItem[], action: PayloadAction<CartItem>) => {
            const {id, name, price, quantity, img} = action.payload
            const existItem = state.find(item => item.id === id)
            if (existItem) {
                existItem.quantity = 1
            } else {
                state.push({
                    id,
                    img,
                    name,
                    price,
                    quantity: 1
                });
                try {
                    sessionStorage.setItem('cart', JSON.stringify(state))
                } catch (error) {
                    console.warn('Error appear while trying save cart in sessionStorage')
                }
            }
        },

        removeCart: (state: CartState, action: PayloadAction<{id: string}>) => {
            const newState = state.filter(item => item.id !== action.payload.id);

            try {
                sessionStorage.setItem('cart', JSON.stringify(newState));
            } catch (error) {
                console.error('Failed to update sessionStorage', error);
            }

            return newState;
        },

        addQuantity: (state: CartState, action: PayloadAction<{id: string}>) => {
            const item = state.find(item => item.id == action.payload.id)
            if (item) {
                item.quantity += 1
                try {
                    sessionStorage.setItem('cart', JSON.stringify(state))
                } catch (error) {
                    console.warn('Error while trying add qty', error)
                }
            }
        },

        decreaseQuantity: (state: CartState, action: PayloadAction<{id: string}>) => {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity -= 1
                try {
                    sessionStorage.setItem('cart', JSON.stringify(state))
                } catch (error) {
                    console.warn('Error while trying decrease qty', error)
                }
            }
        },

        calculatePrice: (state: CartState, action: PayloadAction<{price: number}>) => {
            const subtotle = action.payload.price
            console.log('subtotle', subtotle)

        }
    }
})

export const {addCart, addQuantity, decreaseQuantity, removeCart} = cartSlice.actions;
export default cartSlice.reducer