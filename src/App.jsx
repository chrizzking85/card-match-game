import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard';

const NUMBER_OF_CARDS = 6;
const STAY_OPEN_IN_MS = 600;

const cardImages = [
  {"src":"src/img/"+"helmet-1.png"},
  {"src":"src/img/"+"potion-1.png"},
  {"src":"src/img/"+"ring-1.png"},
  {"src":"src/img/"+"scroll-1.png"},
  {"src":"src/img/"+"shield-1.png"},
  {"src":"src/img/"+"sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled]= useState(false)

  const generateRandomId = () => Math.floor(Math.random() * 10000)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // duplicated cards
      .sort(() => Math.random() - 0.5)                   // randomly swap each pair of cards 
      .map(card => ({...card, matched: false, id: generateRandomId()})) // assign new properties to a card

    setCards(shuffledCards)
  }

  const matchCards = (card1, card2) => {
    if (card1 == null || card2 == null) return

    setDisabled(true)
    if (card1.src === card2.src) { // matching cards
      setCards(prevCards => prevCards.map(card => {
        if (card.src == card1.src) {
          return {...card, matched: true}   // set matched true
        }

        return card
      }))
      resetChoicesAndIncreaseTurn()
    } else { // cards not matching
      setTimeout(resetChoicesAndIncreaseTurn, STAY_OPEN_IN_MS)
    }
  }

  const startNewGame = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    shuffleCards()
    setTurns(0);
  }

  const resetChoicesAndIncreaseTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1) // LEARN!
    setDisabled(false)
  }

  // card choice by user
  const handleChoice = (card) => choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  
  // compare 2 selected cards
  useEffect(() => {
    console.log("hello")
    matchCards(choiceOne, choiceTwo)
    
  }, [choiceTwo])

  useEffect(startNewGame, [])

  console.log(choiceOne, choiceTwo)

  return (
    <div className="App">
     <h1>Magic Match</h1>
     <p>Turns: {turns}</p>
     <div className="card-grid">
       {cards.map(card => (
         //<SingleCard card={card} key={card.id} handleChoice={handleChoice} flipped={card.flipped}/>
           <SingleCard 
              card={card} 
              key={card.id} 
              handleChoice={handleChoice} 
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
         ))}
     </div>
     <button onClick={startNewGame}>New Game</button>
    </div>
  )
}

export default App
