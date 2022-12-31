import { Link } from "react-router-dom";

import './loseMenu.scss'

const LoseMenu = ({closeWindow, difficultLink, repeatTry}) => {

    return (
        <div className="lose-menu">
            <div onClick={() => closeWindow()} className="lose-menu__close"></div>
            <div className="lose-menu__links">
                <Link to={`/`} className="lose-menu__link">Главное меню</Link>
                <Link to={`/difficult`} className="lose-menu__link">Выбрать другую сложность</Link>
                {difficultLink.up ? <Link to={difficultLink.up} className="lose-menu__link">Повысить сложность на один</Link> : null}
                {difficultLink.down ? <Link to={difficultLink.down} className="lose-menu__link">Понизить сложность на один</Link>: null}
                <div onClick={repeatTry} className="lose-menu__link">Заново</div>
            </div>
        </div>
    );
};

export default LoseMenu;