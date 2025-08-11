import {createSlice} from "@reduxjs/toolkit";



const loadStateTotalSumFromSessionStorage = () => {
    if (typeof window === 'undefined') {
        return {}
    }
    try {
        const serializedState = sessionStorage.getItem('totalSum')
        if (serializedState === null) {
            return {
                    subTotal: 0,
                    estimatedTax: 50,
                    estimatedShipping: 29,
                    total: 0
                }

        } else {
            return JSON.parse(serializedState)
        }
    } catch (error) {
        console.warn('Error while trying to read session storage totalSum', error)
    }
}
const initialState = loadStateTotalSumFromSessionStorage()

const totalSumSlice = createSlice({
    name: 'totalSum',
    initialState,
    reducers: {
        calculateTotalSum: (state, action) => {

            state.subTotal += action.payload.price
            state.total = state.subTotal + state.estimatedTax + state.estimatedShipping
            try {
                sessionStorage.setItem('totalSum', JSON.stringify(state))
            } catch (error) {
                console.warn('Error while trying to save in session storage totalSum', error)
            }
        },
        decreaseTotalSum: (state, action) => {
            state.subTotal -= action.payload.price
            state.total -= action.payload.price
            if(state.subTotal === 0) {
                state.total = 0
            }
            try {
            sessionStorage.removeItem('totalSum')
            }  catch (error) {
                console.warn('Error while trying to decrease totalSum', error)
            }
        }
    }
})

export const {calculateTotalSum, decreaseTotalSum} = totalSumSlice.actions;
export default totalSumSlice.reducer