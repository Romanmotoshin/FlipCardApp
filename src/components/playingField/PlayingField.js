import React, {useState, useMemo, useEffect} from 'react';
import GameCard from '../gameCard/GameCard';
import HeadMenu from '../headMenu/HeadMenu';
import shuffleCards from '../shuffleCards/shuffleCards'


import './playingField.scss'

const PlayingField = (props) => {

    const {arrayCards} = props

    const [attempts, setAttempts] = useState(null)
    const [matchCard, setMatchCard] = useState(null)
    const [arr, setArr] = useState([])
    const [fieldSizeClass, setFieldClass] = useState(null)
    const [openedCardsStatus, setOpenedCardsStatus] = useState(true)


    useEffect(() => {
        switch (newArrayCards.length) {
            case 4:
                setFieldClass('field__items_two')
                setAttempts(3)
                break
            case 16:
                setFieldClass('field__items_four')
                setAttempts(10)
                break
            case 36:
                setFieldClass('field__items_six')
                setAttempts(50)
                break
            case 64:
                setFieldClass('field__items_eight')
                setAttempts(99)
                break
            default:
                setFieldClass(null)
        }
    }, [])

    const changeOpenedCardStatus = () => {
        setOpenedCardsStatus(true)
    }

    const addNewCard = (newCard) => { 
        if (matchCard) {
            if (matchCard === newCard) {
                setArr([...arr, newCard])
                setMatchCard(null)
                setOpenedCardsStatus(true)
            } else {
                setMatchCard(null)
                setOpenedCardsStatus(false)
            } 
        setAttempts(attempts => attempts - 1)
        } else {
            setMatchCard(newCard)
        }  
    }

    
    const newArrayCards = useMemo(() => shuffleCards([...arrayCards, ...arrayCards]), [])

    const elements = newArrayCards.map((item, i) => {
        return (
                <GameCard 
                    key={i} 
                    arr={arr} 
                    content={item} 
                    addNewCard={addNewCard} 
                    attempts={attempts}
                    openedCardsStatus={openedCardsStatus}
                    changeOpenedCardStatus={changeOpenedCardStatus}
                    />
        )
    })

    return (
        <div className='field'>
            <HeadMenu attempts={attempts} fieldSize={Math.sqrt(newArrayCards.length)} />
            <div className={`field__items ${fieldSizeClass}`} >
                {elements}
            </div>
        </div>
    )
}

export default PlayingField;