import {Link} from 'react-router-dom';

import './mainMenu.scss'

const MainMenu = () => {

    return (
        <div className="main-menu">
            <div className='main-menu__items'>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__special"><Link className='main-menu__link' to={`difficult`}>Начать Игру</Link></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
                <div className="main-menu__item"></div>
            </div>
        </div>
    );
};

export default MainMenu;