import {Link} from 'react-router-dom';
import { asyncCloseVisible } from '../../store/gameSlice';
import { useDispatch, useSelector } from 'react-redux';

import './headMenu.scss'

const HeadMenu = () => {

    const size = useSelector(state => state.game.size)
    const attempts = useSelector(state => state.game.attempts)

    const dispatch = useDispatch()

    return (
        <div className='headmenu'>
            <div className="headmenu__items">
                <div className="headmenu__item">
                    Размер поля: {size + 'x' + size}
                </div>
                <Link to={`/difficult`} className="headmenu__item headmenu__item_link">Выбрать другую сложность</Link>
                <div  className="headmenu__item headmenu__item_link" onClick={() => dispatch(asyncCloseVisible(size))}>Заново</div>
                <Link to={`/`} className="headmenu__item headmenu__item_link">Главное меню</Link>
                <div className="headmenu__item">
                    Попыток: {attempts}
                </div>
            </div>
        </div>
    );
};

export default HeadMenu;