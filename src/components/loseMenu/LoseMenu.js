import { Link } from "react-router-dom";
import { closeEndGame, asyncCloseVisible } from "../../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";

import './loseMenu.scss'

const LoseMenu = ({victory}) => {

    const size = useSelector(state => state.game.size)
    const correctIconsLength = useSelector(state => state.game.correctIcons.length)

    const dispatch = useDispatch()

    return (
        <div className="lose-menu">
            {!size || size === correctIconsLength ? null : <div className="lose-menu__close" onClick={() => dispatch(closeEndGame())}></div>}
            <div className="lose-menu__links">
                {size ? <h2 className="lose-menu__text">{victory}</h2>: null}
                <Link to={`/`} className="lose-menu__link">Главное меню</Link>
                <Link to={`/difficult`} className="lose-menu__link">Выбрать другую сложность</Link>
                {!size || size === 8 ? null: <div  className="lose-menu__link" onClick={() => dispatch(asyncCloseVisible(size + 2))}>Увеличить размер поля</div>}
                {!size || size === 2 ? null: <div  className="lose-menu__link" onClick={() => dispatch(asyncCloseVisible(size - 2))}>Уменьшить размер поля</div>}
                {size ? <div  className="lose-menu__link" onClick={() => dispatch(asyncCloseVisible(size))}>Заново</div>: null}
            </div>
        </div>
    );
};

export default LoseMenu;