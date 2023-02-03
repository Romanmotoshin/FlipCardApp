import React, {useState, useEffect} from 'react';
import GameCard from '../gameCard/GameCard';
import HeadMenu from '../headMenu/HeadMenu';
import LoseMenu from '../loseMenu/LoseMenu';
import { useSelector, useDispatch } from 'react-redux';
import { removeAttempt, allowOpen, forbidOpen, addCorrectIcon, openEndGame } from '../../store/iconSlice';


import './playingField.scss'

const PlayingField = () => {

    const arrayCards = useSelector(state => state.icons.currentIcons)
    const attempts = useSelector(state => state.icons.attempts)
    const size = useSelector(state => state.icons.size)
    const endGame = useSelector(state => state.icons.endGame)
    const correctIcons = useSelector(state => state.icons.correctIcons)

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
                dispatch(forbidOpen())
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
            <HeadMenu attempts={attempts} fieldSize={size} />
            <div className={`field__items field__items_${size}`} >
                {elements}
            </div>
            {endGame ? <LoseMenu victory={correctIcons.length * 2 === arrayCards.length ? 'Победа': 'Поражение'}/> : null}
        </div>
    )
}

export default PlayingField;