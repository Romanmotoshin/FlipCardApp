import { faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart, faEnvelope, faBomb, faMusic, faHouse, faBolt, faGift, faCar, faBell, faPlane, faTruck, faTree, faWifi, faBicycle, faSnowflake, faFish, faUserSecret, faFlag, faExclamation, faPause, faShower, faHammer, faWrench, faMedal, faCrown } from '@fortawesome/free-solid-svg-icons'
import createRandomIcons from "../services/createRandomIcons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    icons: [faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart, faEnvelope, faBomb, faMusic, faHouse, faBolt, faGift, faCar, faBell, faPlane, faTruck, faTree, faWifi, faBicycle, faSnowflake, faFish, faUserSecret, faFlag, faExclamation, faPause, faShower, faHammer, faWrench, faMedal, faCrown],
    currentIcons: [],
    correctIcons: [],
    attempts: null,
    isAllowOpen: true,
    size: null,
    endGame: false,
    visible: true,

}

export function asyncCloseVisible(size) {
    return dispatch => {
        dispatch(createGame(size))
        dispatch(forbidOpen())
        dispatch(forbidVisible())
        setTimeout(() => {
            dispatch(allowVisible())
            dispatch(allowOpen())
        }, 1000)
    }
}

export function asyncAllowOpen() {
    return dispatch => {
        dispatch(forbidOpen())
        setTimeout(() => {
            dispatch(allowOpen())
        }, 2000)
    }
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        createGame(state, action) {
            state.currentIcons = createRandomIcons(state.icons, action.payload)
            state.attempts = action.payload ** 2
            state.size = action.payload
            state.correctIcons = []
            state.endGame = false
        },
        removeAttempt(state) {
            state.attempts -= 1
        },
        allowOpen(state) {
            state.isAllowOpen = true
        },
        forbidOpen(state) {
            state.isAllowOpen = false
        }, 
        addCorrectIcon(state, action) {
            state.correctIcons.push(action.payload)
        },
        openEndGame(state) {
            state.endGame = true
        },
        closeEndGame(state) {
            state.endGame = false
        },
        allowVisible(state) {
            state.visible = true
        },
        forbidVisible(state) {
            state.visible = false
        }
    }
})


export const { createGame, 
               removeAttempt, 
               allowOpen, 
               forbidOpen, 
               addCorrectIcon, 
               openEndGame, 
               closeEndGame, 
               allowVisible, 
               forbidVisible } = gameSlice.actions

export default gameSlice.reducer 