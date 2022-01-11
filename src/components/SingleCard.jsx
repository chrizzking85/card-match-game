import './SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled}) => (
    <div className="card">
      <div className={flipped ? "flipped":""}>
          <img className="front" src={card.src}></img>
          <img className="back" src="src/img/cover.png" onClick={() => !disabled && handleChoice(card)}></img>
      </div>
    </div>
)

export default SingleCard