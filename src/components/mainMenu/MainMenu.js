import {Link} from 'react-router-dom';
import MainMenuCard from '../mainMenuCard/MainMenuCard';

import './mainMenu.scss'

const MainMenu = () => {

    const elements = []

    for (let i = 0; i < 22; i++) {
        elements.push(<MainMenuCard key={i} id={i}/>)
    }

    return (
        <div className="main-menu">
            <div className='main-menu__items'>
                {elements}
                <div className="main-menu__special"><Link className='main-menu__link' to={`difficult`}>Начать Игру</Link></div>
            </div>
        </div>
    );
};

export default MainMenu;