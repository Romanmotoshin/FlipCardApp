/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import './gameCard.scss'



const GameCard = ({content, addNewCard, id }) => {

    const [flip, setFlip] = useState(false)
    const attempts = useSelector(state => state.game.attempts)
    const correctIcons = useSelector(state => state.game.correctIcons)
    const isAllowOpen = useSelector(state => state.game.isAllowOpen)
    const endGame = useSelector(state => state.game.endGame)
    const visible = useSelector(state => state.game.visible)

   
    useEffect(() => {
        if (!flip && !endGame && attempts === 0) {
            setTimeout(() => {
                setFlip(true)
            }, id * 200)
        } else if (!endGame && flip) {
            setFlip(false)
        }
    }, [endGame, visible])

    useEffect(() => {
        if (flip && !correctIcons.includes(content.iconName)) {
            setTimeout(() => {
                setFlip(false)
            }, 1000)
        } 
        if (!visible) {
            setFlip(false)
        }
    }, [attempts])

    const openCard = (e) => {
        if (attempts > 0 && isAllowOpen && !flip) {
            setFlip(true)
            addNewCard(e.target.getAttribute('data-icon'))
        }
    }

    let clazzFront = flip ? {transform: 'rotateY(-0.5turn)'}: {transform: 'rotateY(0turn)'}
    let clazzBack = flip ? {transform: 'rotateY(0turn)'}: {transform: 'rotateY(0.5turn)'}


    return (
        <div className="field__item" onClick={openCard}>
            <div className="field__item_front" style={clazzFront} data-icon={content.iconName}>

            </div>
            <div className="field__item_back" style={clazzBack}>
                {visible ? <FontAwesomeIcon icon={content} className='field__icon'/> : null}
            </div>
        </div>
    )
}

export default GameCard;