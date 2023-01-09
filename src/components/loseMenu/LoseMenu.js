import { Link } from "react-router-dom";

import './loseMenu.scss'

const LoseMenu = ({difficultLink, victory, attempts, showAnswers}) => {

    let gameOverText = ''
    if (attempts === 0 && !victory) {
        gameOverText = "Поражение"
    } else {
        gameOverText = "Победа"
    }

    return (
        <div className="lose-menu">
            <div className="lose-menu__close" onClick={showAnswers}></div>
            <div className="lose-menu__links">
                <h2 className="lose-menu__text">{gameOverText}</h2>
                <Link to={`/`} className="lose-menu__link">Главное меню</Link>
                <Link to={`/difficult`} className="lose-menu__link">Выбрать другую сложность</Link>
                {difficultLink.up ? <Link to={difficultLink.up} className="lose-menu__link">Повысить сложность на один</Link> : null}
                {difficultLink.down ? <Link to={difficultLink.down} className="lose-menu__link">Понизить сложность на один</Link>: null}
                <div onClick={() => window.location.reload()} className="lose-menu__link">Заново</div>
            </div>
        </div>
    );
};

export default LoseMenu;