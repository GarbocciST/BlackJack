import axios from "axios";


export const newDeckApi = axios.create({
    baseURL: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
});

export const cardApi = axios.create({
    baseURL: 'https://www.deckofcardsapi.com/api/deck/', //fzxt4y5ub596/draw/?count=1 // count=52
});