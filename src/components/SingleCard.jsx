import './SingleCard.css'
import cover from '/src/img/cover.png'
import pic1 from "/src/img/helmet-1.png"
import pic2 from "/src/img/potion-1.png"
import pic3 from "/src/img/ring-1.png"
import pic4 from "/src/img/scroll-1.png"
import pic5 from "/src/img/shield-1.png"
import pic6 from "/src/img/sword-1.png"

const SingleCard = ({card, handleChoice, flipped, disabled}) => (
    <div className="card">
      <div className={flipped ? "flipped":""}>
          <img className="front" src={card.src}></img>
          <img className="back" src={cover} onClick={() => !disabled && handleChoice(card)}></img>
      </div>
    </div>
)

export default SingleCard