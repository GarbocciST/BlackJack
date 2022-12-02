import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlayerDiv, BankDiv, AlertPage } from './components';
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


  return (
    <>
      {
        (isFinished === true) ?
        <AlertPage valuePlayer={valuePlayer} valueBank={valueBank}/> 
        :
        ""
      }

      <PlayerDiv cards={cards} valuePlayer={valuePlayer} isFinished={isFinished}/>

      <BankDiv cardsBank={cardsBank} valueBank={valueBank}/>  
      
    
    </>
  )
}
