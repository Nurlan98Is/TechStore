import {createSlice} from "@reduxjs/toolkit";

const loadUserFromSessionStorage = () => {
    if (typeof window === "undefined") {
        return {}
    }
    try {
        const serializeUser = sessionStorage.getItem("user");
        if (serializeUser === null) {
            return {
                user: {},
                creditCards: [{
                    cardNumber: '',
                    cardHolder: '',
                    dateExp: '',
                    cvv: '',
                }],
                addresses: []
            }
        } else {
            return JSON.parse(serializeUser)
        }
    } catch (error) {
        console.warn(`Could not load user from session storage`, error)
    }
}
const initialState = loadUserFromSessionStorage()

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCreditCards: (state, action) => {
            console.log('action', action.payload)
            state.creditCards.push({
                cardHolder: action.payload.cardHolder,
                cardNumber: action.payload.cardNumber,
                dateExp: action.payload.dateExp,
                cvv: action.payload.cvv,
            })
        }
    }
})

export const {setCreditCards} = userSlice.actions;
export default userSlice.reducer;
