import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlayerDiv, BankDiv } from './components';
import { timer } from './helpers';
import { finishLoading, getNewDeck } from './store';


export const BlackJackApp = () => {

  const {cards, cardsBank, valuePlayer, valueBank, isFinished} = useSelector(state => state.blackJack);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewDeck());
  }, [])
  
  //! preguntar que es mejor si este useEffect en el que tengo un if dentro y se renderiza 
  useEffect(() => {
    if( valuePlayer > 21 ) {
      dispatch(finishLoading());
    }
  }, [valuePlayer])

  //! preguntar si es mejor este otro en el que la condicion esta dentro de lo que dispara al Effect
  useEffect(() => {
    if( isFinished === true) {
      timer(valuePlayer)
    }
  }, [isFinished])
  

  return (
    <>
     <PlayerDiv cards={cards} valuePlayer={valuePlayer} isFinished={isFinished}/>

     <BankDiv cardsBank={cardsBank} valueBank={valueBank}/>
    
    </>
  )
}
