import {Link} from 'react-router-dom'

import './chooseDifficultMenu.scss'

const ChooseDifficultMenu = () => {
    return (
        <div className="difficult-menu">
            <div className='difficult-menu__items'>
                <div className="difficult-menu__item"><Link className='difficult-menu__link' to={`2x2`}>2x2</Link></div>
                <div className="difficult-menu__item"><Link className='difficult-menu__link' to={`4x4`}>4x4</Link></div>
                <div className="difficult-menu__item"><Link className='difficult-menu__link' to={`6x6`}>6x6</Link></div>
                <div className="difficult-menu__item"><Link className='difficult-menu__link' to={`8x8`}>8x8</Link></div>
            </div>
        </div>
    );
};

export default ChooseDifficultMenu;