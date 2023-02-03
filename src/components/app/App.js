import PlayingField from "../playingField/PlayingField";
import MainMenu from "../mainMenu/MainMenu";
import ChooseDifficultMenu from "../chooseDifficultMenu/ChooseDifficultMenu";
import { store } from "../../store";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

const App = () => {

    const router = createHashRouter([
        {
            path: "/",
            element: <MainMenu/>,
        },
        {
            path: "/difficult",
            element: <ChooseDifficultMenu/>,
        },
        {
            path: "/game",
            element: <PlayingField/>,
        },
    ])

	return (
		<Provider store={store}>
            <div className="app">
                <RouterProvider router={router}/>
            </div>
        </Provider>
	)
}



export default App;
