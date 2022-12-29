import {Link} from 'react-router-dom';

import './headMenu.scss'

const HeadMenu = ({attempts, fieldSize}) => {
    return (
        <div className='headmenu'>
            <div className="gachilink"><a href="https://www.youtube.com/watch?v=5VQ5-u0ncGM">опа</a></div>
            <div className="headmenu__items">
                <div className="headmenu__item">
                    Размер поля: {fieldSize + 'x' + fieldSize}
                </div>
                <Link to={`/difficult`} className="headmenu__item ">Выбрать другую сложность</Link>
                <Link to={`/`} className="headmenu__item ">Главное меню</Link>
                <div className="headmenu__item">
                    Попыток: {attempts}
                </div>
            </div>
        </div>
    );
};

export default HeadMenu;