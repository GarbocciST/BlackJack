import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { PlayerDiv, BankDiv } from './components';
import { getNewDeck } from './store';


export const BlackJackApp = () => {

  const {cards, cardsBank, valuePlayer, valueBank, isFinished} = useSelector(state => state.blackJack);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewDeck());
  }, [])

  //! Botones de disable
  //! Nuevo estado que active useEffect para la alerta con setTimeout con cleanUp
  // useEffect(() => {
  //   (valueBank === valuePlayer) ? Swal.fire({
  //     icon: 'success',
  //     title: 'Victoria',
  //     text: 'Ganaste, juego terminado',
  //   })
  //   : ""

  // }, [valueBank]);
  

  
  
  // if ( valuePlayer <= 21 && valuePlayer > valueBank && valueBank > 0 ) {

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Victoria',
  //     text: 'Ganaste, juego terminado',
  //   })
  // }

  // if ( valuePlayer > 21) {
 
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Derrota',
  //     text: 'Perdiste, juego terminado',
  //   })
  // }

    
  
  
  
  // console.log(newDeck)

  return (
    <>
     <PlayerDiv cards={cards} valuePlayer={valuePlayer} isFinished={isFinished}/>

     <BankDiv cardsBank={cardsBank} valueBank={valueBank}/>
    
    </>
  )
}
