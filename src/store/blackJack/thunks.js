import { cardApi, newDeckApi } from '../../api';
import { addCard, addCardBank, finishLoading, incrementValue, incrementValueBank, setDeck } from './blackJackSlice';


export const getNewDeck = () => {
    return async(dispatch, getState) => {
        try {
            const {data} = await newDeckApi.get()
    
            dispatch(setDeck(data.deck_id))
            
        } catch (error) {
            console.log(error);
            throw new Error('Error al Obtener Shuffle Deck');
        }

    }
}

export const getCard = () => {
    return async(dispatch, getState) => {
        try {
            
            const currentStateDeck= getState().blackJack.newDeck;

            const {data} = await cardApi.get(`${currentStateDeck}/draw/?count=1`);
            
            const argument = data.cards[0]; 
            
            dispatch(addCard(argument));


            (argument.value === 'JACK' || argument.value === 'QUEEN' || argument.value === 'KING' ) 
            ? dispatch(incrementValue(10)) 
            : (argument.value === 'ACE') ? dispatch(incrementValue(11)) 
            : dispatch(incrementValue(parseInt(argument.value)))

            // console.log(argument.value)
         
            // dispatch(incrementValue(argument.value)) JACK QUEEN KING ACE 
            
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener cartas para el Jugador');
        }
    }
}

export const getCardBank = () => {
    return async(dispatch, getState) => {
        try {
            
            const currentStateDeck = getState().blackJack.newDeck;
            const playerPoints = getState().blackJack.valuePlayer;
            
            let bankPoints = getState().blackJack.valueBank;
            
            let argumentValue = 0;
            do {
                
                // console.log(currentState)
                const {data} = await cardApi.get(`${currentStateDeck}/draw/?count=1`);
                // console.log(data.cards[0]);
                
                const argument = data.cards[0]; 
                argumentValue = argumentValue + 1
                dispatch(addCardBank(argument));
                
                
                (argument.value === 'JACK' || argument.value === 'QUEEN' || argument.value === 'KING' ) 
                ? dispatch(incrementValueBank(10)) 
                : (argument.value === 'ACE') ? dispatch(incrementValueBank(11)) 
                : dispatch(incrementValueBank(parseInt(argument.value)))
                
                bankPoints = getState().blackJack.valueBank;
                // console.log(bankPoints)
                dispatch(finishLoading());

            } while ( (bankPoints < playerPoints) && playerPoints <= 21 );
            
            
            //! Dispatch accion que active useEffect para la alerta

        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener cartas para la computadora');
        }
    }
}