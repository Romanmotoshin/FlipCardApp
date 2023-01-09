import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './gameCard.scss'



const GameCard = ({content, addNewCard, attempts, guessedCards, openedCardsStatus, allowOpenedCardStatus, loseMenu, id, transDuration, startAnimation}) => {

    const [flip, setFlip] = useState(false)

    useEffect(() => {
        if (guessedCards.length === 0) {
            setFlip(false)
        }
    }, [guessedCards])

    useEffect(() => {
        if (!loseMenu && attempts === 0) {
            startAnimation()
            setTimeout(() => {
                setFlip(true)
            }, id * 200)
        }
    }, [loseMenu])

    useEffect(() => {
        if (flip && guessedCards && !(guessedCards.indexOf(content.iconName) > -1)) {
            setTimeout(() => {
                setFlip(false)
                setTimeout(() => {
                    allowOpenedCardStatus()
                }, 1000)
            }, 1000)
        }
    }, [attempts])

    const openCard = (e) => {
        if (e.target.classList.contains('field__item_front') && attempts > 0 && openedCardsStatus && !flip) {
            startAnimation()
            setFlip(true)
            addNewCard(e.target.getAttribute('data-icon'))
        }
    }

    let clazzFront = flip ? {transform: 'rotateY(-0.5turn)'}: {transform: 'rotateY(0turn)'}
    let clazzBack = flip ? {transform: 'rotateY(0turn)'}: {transform: 'rotateY(0.5turn)'}


    return (
        <div className="field__item" onClick={openCard}>
            <div className="field__item_front" style={{...transDuration, ...clazzFront} } data-icon={content.iconName}>

            </div>
            <div className="field__item_back" style={{...transDuration, ...clazzBack}}>
                <FontAwesomeIcon icon={content} className='field__icon'/>
            </div>
        </div>
    )
}

export default GameCard;