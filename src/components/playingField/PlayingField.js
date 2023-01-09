import React, {useState, useEffect} from 'react';
import GameCard from '../gameCard/GameCard';
import HeadMenu from '../headMenu/HeadMenu';
import LoseMenu from '../loseMenu/LoseMenu';


import './playingField.scss'

const PlayingField = ({arrayCards}) => {


    const [transDuration, setTransDuration] = useState({'transition': 'all 0s linear'})
    const [attempts, setAttempts] = useState(null)
    const [loseMenu, setLoseMenu] = useState(false)
    const [matchCard, setMatchCard] = useState(null)
    const [guessedCards, setGuessedCards] = useState([])
    const [fieldSizeClass, setFieldClass] = useState(null)
    const [openedCardsStatus, setOpenedCardsStatus] = useState(true)
    const [difficultLink, setDifficultLink] = useState({})

    useEffect(() => {
        setTransDuration({'transition': 'all 0s linear'})
        findOutSize()
        setLoseMenu(false)
        setMatchCard(null)
        setGuessedCards([])
    }, [arrayCards])

    useEffect(() => {
        if (attempts === 0 || guessedCards.length * 2 === arrayCards.length){
            setLoseMenu(true)
            setOpenedCardsStatus(false)
        } 
    }, [attempts])

    const startAnimation = () => {
        setTransDuration({'transition': 'all 1s linear'})
    }

    const showAnswers = () => {
        setLoseMenu(false);
    }

    const findOutSize = () => {
        switch (arrayCards.length) {
            case 4:
                setFieldClass('field__items_two')
                setAttempts(3)
                setDifficultLink({down: null, up: `/4x4`})
                break
            case 16:
                setFieldClass('field__items_four')
                setAttempts(16)
                setDifficultLink({down: `/2x2`, up: `/6x6`})
                break
            case 36:
                setFieldClass('field__items_six')
                setAttempts(36)
                setDifficultLink({down: `/4x4`, up: `/8x8`})
                break
            case 64:
                setFieldClass('field__items_eight')
                setAttempts(64)
                setDifficultLink({down: `/6x6`, up: null})
                break
            default:
                setFieldClass(null)
        }
    }

    const allowOpenedCardStatus = () => {
        setOpenedCardsStatus(true)
    }

    const addNewCard = (newCard) => {
        if (matchCard) {
            if (matchCard === newCard) {
                setGuessedCards([...guessedCards, newCard])
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

    const elements = arrayCards.map((item, i) => {
        return (
                <GameCard 
                    loseMenu={loseMenu}
                    id={i}
                    key={i} 
                    guessedCards={guessedCards} 
                    content={item} 
                    addNewCard={addNewCard} 
                    attempts={attempts}
                    openedCardsStatus={openedCardsStatus}
                    allowOpenedCardStatus={allowOpenedCardStatus}
                    transDuration={transDuration}
                    startAnimation={startAnimation}
                    />
        )
    })

    return (
        <div className='field'>
            <HeadMenu attempts={attempts} fieldSize={Math.sqrt(arrayCards.length)} />
            <div className={`field__items ${fieldSizeClass}`} >
                {elements}
            </div>
            {loseMenu ? <LoseMenu 
                            attempts={attempts}
                            showAnswers={showAnswers}
                            victory={guessedCards.length * 2 === arrayCards.length}
                            difficultLink={difficultLink}/> : null}
        </div>
    )
}

export default PlayingField;