import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquare, faSquareXmark, faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './gameCard.scss'

const GameCard = (props) => {
    const [content, setContent] = useState(null)
    const [flip, setFlip] = useState(false)
    const [close, setClose] = useState(false)

    let clazz = 'field__item_front'

    const getGameCardContent = () => {
        if (flip) {
            clazz = 'field__item_back'
            console.log(close)
            if(!close ){
                setTimeout(() => closeCard(), 1000)
            }
            return content
        } else {
            clazz = 'field__item_front'
            return content
        }
    }

    const closeCard = () => {
        setFlip(false)
        setContent(null)
        props.removeOpenedCard()
    }


    const element = getGameCardContent()

    const changeGameCardContent = (e) => {
        if (e.target.classList.contains('field__item_front') && props.openedCards < 2) {
            setFlip(flip => !flip)
            setContent(<FontAwesomeIcon icon={props.content} style={{'width': 100, 'height': 100}} />)
            props.addOpenedCard()
            setClose(props.compareCard(props.content.iconName))
            
        }
    }

    

    return (
        <div onClick={changeGameCardContent} className={clazz}>
            <div className="field__content">
                {element}
            </div>
        </div>
    )
}

export default GameCard;