import { BankCards } from './';


export const BankDiv = ({valueBank, cardsBank}) => {


  return (
    <>
      
          <h1>Banca: {valueBank}</h1>
          <hr />
        
          <ul>
              {
                  cardsBank.map( card => (
                    <BankCards key={card.code} card={card}/>
                  ))
              }
          </ul>
         
          
        
    </>
  )
}
