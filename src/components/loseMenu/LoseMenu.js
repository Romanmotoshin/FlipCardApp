import { Link } from "react-router-dom";
import { closeEndGame } from "../../store/iconSlice";
import { useDispatch } from "react-redux";

import './loseMenu.scss'

const LoseMenu = ({victory}) => {

    const dispatch = useDispatch()

    return (
        <div className="lose-menu">
            <div className="lose-menu__close" onClick={() => dispatch(closeEndGame())}></div>
            <div className="lose-menu__links">
                <h2 className="lose-menu__text">{victory}</h2>
                <Link to={`/`} className="lose-menu__link">Главное меню</Link>
                <Link to={`/difficult`} className="lose-menu__link">Выбрать другую сложность</Link>
                <Link to={`/difficult`} className="lose-menu__link">Повысить сложность на один</Link> 
                <Link to={`/difficult`} className="lose-menu__link">Понизить сложность на один</Link> 
                <div  className="lose-menu__link">Заново</div>
            </div>
        </div>
    );
};

export default LoseMenu;