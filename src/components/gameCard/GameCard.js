import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { allowOpen } from '../../store/iconSlice';
import { useDispatch, useSelector } from 'react-redux';

import './gameCard.scss'



const GameCard = ({content, addNewCard, id }) => {

    const [flip, setFlip] = useState(false)
    const attempts = useSelector(state => state.icons.attempts)
    const correctIcons = useSelector(state => state.icons.correctIcons)
    const isAllowOpen = useSelector(state => state.icons.isAllowOpen)
    const endGame = useSelector(state => state.icons.endGame)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!endGame && attempts === 0) {
            setTimeout(() => {
                setFlip(true)
            }, id * 200)
        }
    }, [endGame])

    useEffect(() => {
        if (flip && !correctIcons.includes(content.iconName)) {
            setTimeout(() => {
                setFlip(false)
                setTimeout(() => {
                    dispatch(allowOpen())
                }, 1000)
            }, 1000)
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
                <FontAwesomeIcon icon={content} className='field__icon'/>
            </div>
        </div>
    )
}

export default GameCard;