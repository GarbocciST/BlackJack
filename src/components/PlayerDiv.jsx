import { useDispatch } from 'react-redux';
import { getCard, getCardBank, getNewDeck, newGame } from '../store';
import { PlayerCards } from './PlayerCards';

export const PlayerDiv = ({valuePlayer, cards , isFinished}) => {
  
  const dispatch = useDispatch();

  const onNewGame = () => {
    dispatch(newGame());
    dispatch(getNewDeck());
  }

  
  
  return (
    <> 
      <div className="alto">
          <div className="d-flex justify-content-between">
              <h1>Jugador: {valuePlayer}</h1> 

              <div className="botones align-self-center">
              <button className="btn btn-danger m-1" onClick={onNewGame}>Nuevo juego</button>
              <button className="btn btn-primary m-1" onClick={ () => dispatch(getCard())} disabled={isFinished}>Pedir carta</button>
              <button className="btn btn-primary m-1" onClick={ () => dispatch(getCardBank())} disabled={valuePlayer === 0 || isFinished}>Terminar ronda</button>
              </div>
          </div>

          <hr />
        

          <ul className=" d-flex">
              {
                cards.map( card => (
                  <PlayerCards key={card.code} card={card}/>
                ))
              }
          </ul>  
      </div>
        
    </>
  )
}
