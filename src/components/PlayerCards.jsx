

export const PlayerCards = ({card}) => {
  return (
    <>
     <li className="d-inline-flex" key={card.code}>
        <img className="carta" src={`../src/assets/${card.code}.png`} alt={card.code} />
     </li>
    </>
  )
}
