import './SingleCard.css'
import cover from '/src/img/cover.png'

const SingleCard = ({card, handleChoice, flipped, disabled}) => (
    <div className="card">
      <div className={flipped ? "flipped":""}>
          <img className="front" src={card.src}></img>
          <img className="back" src={cover} onClick={() => !disabled && handleChoice(card)}></img>
      </div>
    </div>
)

export default SingleCard