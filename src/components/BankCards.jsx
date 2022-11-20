

export const BankCards = ({card}) => {
  return (
    <>
     <li className="d-inline-flex">
        <img className="carta" src={`../src/assets/${card.code}.png`} alt={card.code} />
     </li>
    </>
  )
}
