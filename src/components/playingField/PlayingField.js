import React, {useState, useEffect} from 'react';
import GameCard from '../gameCard/GameCard';
import HeadMenu from '../headMenu/HeadMenu';
import LoseMenu from '../loseMenu/LoseMenu';
import shuffleCards from '../shuffleCards/shuffleCards'


import './playingField.scss'

const PlayingField = ({arrayCards}) => {

    const [newArrayCards, setNewArrayCards] = useState(shuffleCards([...arrayCards, ...arrayCards]))
    const [attempts, setAttempts] = useState(null)
    const [loseMenu, setLoseMenu] = useState(false)
    const [matchCard, setMatchCard] = useState(null)
    const [arr, setArr] = useState([])
    const [fieldSizeClass, setFieldClass] = useState(null)
    const [openedCardsStatus, setOpenedCardsStatus] = useState(true)
    const [difficultLink, setDifficultLink] = useState({})

    useEffect(() => {
        if (attempts === 0){
            setLoseMenu(true)
        } 
    }, [attempts])

    useEffect(() => {
        repeatTry()
    }, [arrayCards])

    useEffect(() => {
        findOutSize()
    }, [newArrayCards])

    const findOutSize = () => {
        switch (newArrayCards.length) {
            case 4:
                setFieldClass('field__items_two')
                setAttempts(3)
                setDifficultLink({down: null, up: `/4x4`, current: `/2x2`})
                break
            case 16:
                setFieldClass('field__items_four')
                setAttempts(1)
                setDifficultLink({down: `/2x2`, up: `/6x6`, current: `/4x4`})
                break
            case 36:
                setFieldClass('field__items_six')
                setAttempts(2)
                setDifficultLink({down: `/4x4`, up: `/8x8`, current: `/6x6`})
                break
            case 64:
                setFieldClass('field__items_eight')
                setAttempts(60)
                setDifficultLink({down: `/6x6`, up: null, current: `/8x8`})
                break
            default:
                setFieldClass(null)
        }
    }

    const repeatTry = () => {
        setNewArrayCards(shuffleCards([...arrayCards, ...arrayCards]))
        closeWindow()
        setArr([])
        setAttempts(null)
    }
 
    const closeWindow = () => {
        setLoseMenu(false)
        if (arr.length === arrayCards.length) {
            setArr([...arr, ' '])
        }
    }

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

    const elements = newArrayCards.map((item, i) => {
        return (
                <GameCard 
                    loseMenu={loseMenu}
                    id={i}
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
            {loseMenu || arr.length === arrayCards.length ? <LoseMenu 
                            attempts={attempts}
                            victory={arr.length === arrayCards.length}
                            closeWindow={closeWindow} 
                            repeatTry={repeatTry} 
                            difficultLink={difficultLink}/> : null}
        </div>
    )
}

export default PlayingField;