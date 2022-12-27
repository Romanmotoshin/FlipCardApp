import React, {useState, useMemo} from 'react';
import GameCard from '../gameCard/GameCard';
import shuffleCards from '../shuffleCards/shuffleCards'
import { faSquare, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

import './playingField.scss'

const PlayingField = () => {

    const [openedCards, setOpenedCards] = useState(0)
    const [compCards, setCompCards] = useState(null)

    const compareCard = (card) => {
        if (!compCards) {
            setCompCards(card)
            return false
        } else {
            if (compCards === card) {
                setCompCards(null)
                return true
            } else {
                setCompCards(null)
                return false
            }
        }
    }

    const addOpenedCard = () => {
        setOpenedCards(openedCards => openedCards + 1)
    }

    const removeOpenedCard = () => {
        setOpenedCards(0)
    }

    const arrayCards = [faSquare, faSquareXmark]
    const newArrayCards = useMemo(() => shuffleCards([...arrayCards, ...arrayCards]), [])

    const elements = newArrayCards.map((item, i) => {
        return <GameCard key={i} content={item} compareCard={compareCard} addOpenedCard={addOpenedCard} removeOpenedCard={removeOpenedCard} openedCards={openedCards}/>
    })

    return (
        <div className='field'>
            <div className="field__items">
                {elements}
            </div>
        </div>
    );
};

export default PlayingField;