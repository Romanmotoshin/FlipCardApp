import { Link } from "react-router-dom";

import './loseMenu.scss'

const LoseMenu = ({closeWindow}) => {

    return (
        <div className="lose-menu">
            <div onClick={() => closeWindow()} className="lose-menu__close"></div>
            <div className="lose-menu__links">
                <Link className="lose-menu__link">Главное меню</Link>
                <Link className="lose-menu__link">Выбрать другую сложность</Link>
                <Link className="lose-menu__link">Повысить сложность на один</Link>
                <Link className="lose-menu__link">Понизить сложность на один</Link>
                <Link className="lose-menu__link">Заново</Link>
            </div>
        </div>
    );
};

export default LoseMenu;