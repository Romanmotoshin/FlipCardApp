import PlayingField from "../playingField/PlayingField";
import MainMenu from "../mainMenu/MainMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChooseDifficultMenu from "../chooseDifficultMenu/ChooseDifficultMenu";
import { faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart, faEnvelope, faBomb, faMusic, faHouse, faBolt, faGift, faCar, faBell, faPlane, faTruck, faTree, faWifi, faBicycle, faSnowflake, faFish, faUserSecret, faFlag, faExclamation, faPause, faShower, faHammer, faWrench, faMedal, faCrown } from '@fortawesome/free-solid-svg-icons'

import './app.scss'

const App = () => {

    const icons = {
        two: [faPaperclip, faUmbrella],
        four: [faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart],
        six: [faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart, faEnvelope, faBomb, faMusic, faHouse, faBolt, faGift, faCar, faBell, faPlane, faTruck],
        eight: [faSquare, faSquareXmark, faCircle, faStar, faPhone, faPaperclip, faUmbrella, faHeart, faEnvelope, faBomb, faMusic, faHouse, faBolt, faGift, faCar, faBell, faPlane, faTruck, faTree, faWifi, faBicycle, faSnowflake, faFish, faUserSecret, faFlag, faExclamation, faPause, faShower, faHammer, faWrench, faMedal, faCrown]
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainMenu/>,
        },
        {
            path: "/difficult",
            element: <ChooseDifficultMenu/>,
        },
        {
            path: "/difficult/2x2",
            element: <PlayingField arrayCards={icons.two}/>,
        },
        {
            path: "/difficult/4x4",
            element: <PlayingField arrayCards={icons.four}/>,
        },
        {
            path: "/difficult/6x6",
            element: <PlayingField arrayCards={icons.six}/>,
        },
        {
            path: "/difficult/8x8",
            element: <PlayingField arrayCards={icons.eight}/>,
        },
    ])

	return (
		<div className="app">
            <RouterProvider router={router}/>
		</div>
	)
}

export default App;
