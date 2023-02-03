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
    endGame: false

}

const iconSlice = createSlice({
    name: 'icon',
    initialState,
    reducers: {
        createGame(state, action) {
            state.currentIcons = createRandomIcons(state.icons, action.payload)
            state.attempts = action.payload * 2
            state.size = action.payload
            state.correctIcons = []
            state.endGame = false
            state.isAllowOpen = true
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
    }
})


export const { createGame, removeAttempt, allowOpen, forbidOpen, addCorrectIcon, openEndGame, closeEndGame } = iconSlice.actions

export default iconSlice.reducer 