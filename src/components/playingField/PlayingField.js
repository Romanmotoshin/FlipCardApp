/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import GameCard from '../gameCard/GameCard';
import HeadMenu from '../headMenu/HeadMenu';
import LoseMenu from '../loseMenu/LoseMenu';
import { useSelector, useDispatch } from 'react-redux';
import { removeAttempt, allowOpen, addCorrectIcon, openEndGame, asyncAllowOpen } from '../../store/gameSlice';


import './playingField.scss'

const PlayingField = () => {

    const arrayCards = useSelector(state => state.game.currentIcons)
    const attempts = useSelector(state => state.game.attempts)
    const size = useSelector(state => state.game.size)
    const endGame = useSelector(state => state.game.endGame)
    const correctIcons = useSelector(state => state.game.correctIcons)

    const dispatch = useDispatch()
    
    const [matchCard, setMatchCard] = useState(null)

    useEffect(() => {
        if (attempts === 0 || correctIcons.length * 2 === arrayCards.length){
            dispatch(openEndGame())
        }
    }, [attempts])

    const addNewCard = (newCard) => {
        if (matchCard) {
            if (matchCard === newCard) {
                dispatch(allowOpen())
                dispatch(addCorrectIcon(newCard))
            } else {
                dispatch(asyncAllowOpen())
            } 
        setMatchCard(null)
        dispatch(removeAttempt())
        } else {
            setMatchCard(newCard)
        }  
    }

    const elements = arrayCards.map((item, i) => {
        return (
                <GameCard 
                    id={i}
                    key={i}
                    content={item} 
                    addNewCard={addNewCard}
                    />
        )
    })

    return (
        <div className='field'>
            <HeadMenu />
            <div className={`field__items field__items_${size}`} >
                {elements}
            </div>
            {endGame ? <LoseMenu victory={correctIcons.length * 2 === arrayCards.length ? 'Победа': 'Поражение'}/> : null}
        </div>
    )
}

export default PlayingField;