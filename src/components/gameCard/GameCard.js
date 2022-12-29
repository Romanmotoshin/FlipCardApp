import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './gameCard.scss'



const GameCard = (props) => {
    const {content, addNewCard, attempts, arr, openedCardsStatus, changeOpenedCardStatus} = props
    
    const [flip, setFlip] = useState(false)

    useEffect(() => {
        if (flip && arr && !(arr.indexOf(content.iconName) > -1)) {
            setTimeout(() => {
                setFlip(false)
                changeOpenedCardStatus()
            }, 1000)
        }
    }, [attempts])

    const changeFlip = (e) => {
        if (e.target.classList.contains('field__item_front') && attempts > 0 && openedCardsStatus) {
            setFlip(true)
            addNewCard(e.target.getAttribute('data-icon'))
        }
    }

    const clazz = flip ? 'field__item_back': 'field__item_front'
    const element = flip ? <FontAwesomeIcon icon={content} className='field__icon'/> : null

    return (
        <div onClick={changeFlip} data-icon={content.iconName} className={clazz}>
                {element}
        </div>
    )
}

export default GameCard;