import {Link} from 'react-router-dom';

import './headMenu.scss'

const HeadMenu = ({attempts, fieldSize}) => {
    return (
        <div className='headmenu'>
            <div className="headmenu__items">
                <div className="headmenu__item">
                    Размер поля: {fieldSize + 'x' + fieldSize}
                </div>
                <Link to={`/difficult`} className="headmenu__item headmenu__item_link">Выбрать другую сложность</Link>
                <Link to={`/`} className="headmenu__item headmenu__item_link">Главное меню</Link>
                <div className="headmenu__item">
                    Попыток: {attempts}
                </div>
            </div>
        </div>
    );
};

export default HeadMenu;