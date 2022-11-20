import { createSlice } from '@reduxjs/toolkit';

export const blackJackSlice = createSlice({
    name: 'blackJack',
    initialState: {
        newDeck: [],
        cards: [],
        cardsBank: [],
        valuePlayer: 0,
        valueBank: 0,
        alert: false,
        isFinished: false,
    },
    reducers: {
        setDeck: (state, {payload}) => {
            state.newDeck = payload;
        },

        addCard: (state, {payload}  ) => {
           state.cards.push(payload);
        },

        incrementValue: (state, {payload}  ) => {
           state.valuePlayer += payload;
        },

        addCardBank: (state, {payload}  ) => {
           state.cardsBank.push(payload);
        },
        
        incrementValueBank: (state, {payload}  ) => {
            state.valueBank += payload;
        },

        finishLoading: (state, {payload}  ) => {
            state.isFinished = true; 
        },

        newGame: (state) => {
           state.newDeck = [];
           state.cards = [];
           state.cardsBank = [];
           state.valuePlayer = 0;
           state.valueBank = 0;
           state.isFinished = false; 
           //! state.alert = false;
        },

        //! nueva accion con alert
                
    }
});

// Action creators are generated for each case reducer function
export const {
    setDeck, 
    addCard, 
    incrementValue, 
    addCardBank, 
    incrementValueBank, 
    finishLoading,
    newGame
} = blackJackSlice.actions;