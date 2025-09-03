import {createSlice} from "@reduxjs/toolkit";

// Дефолтное состояние
const defaultState = {
    user: {},
    creditCards: [],
    addresses: []
};

const loadUserFromSessionStorage = () => {
    if (typeof window === "undefined") {
        return defaultState; // возвращаем дефолтное состояние, а не {}
    }
    try {
        const serializeUser = sessionStorage.getItem("user");
        if (serializeUser === null) {
            return defaultState; // возвращаем дефолтное состояние
        } else {
            const parsed = JSON.parse(serializeUser);
            // Гарантируем, что все необходимые поля есть
            return {
                ...defaultState,
                ...parsed,
                creditCards: parsed.creditCards || [],
                addresses: parsed.addresses || []
            };
        }
    } catch (error) {
        console.warn(`Could not load user from session storage`, error);
        return defaultState; // возвращаем дефолтное состояние при ошибке
    }
}

const initialState = loadUserFromSessionStorage();

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCreditCards: (state, action) => {
            console.log('action', action.payload);

            // Инициализируем creditCards если они undefined
            if (!state.creditCards) {
                state.creditCards = [];
            }

            state.creditCards.push({
                id: Date.now(), // добавляем уникальный ID
                cardHolder: action.payload.cardHolder,
                cardNumber: action.payload.cardNumber,
                dateExp: action.payload.dateExp,
                cvv: action.payload.cvv,
            });

            try {
                sessionStorage.setItem("user", JSON.stringify(state));
            } catch (error) {
                console.warn(`Could not save user to session storage`, error);
            }
        }
    }
});

export const {setCreditCards} = userSlice.actions;
export default userSlice.reducer;