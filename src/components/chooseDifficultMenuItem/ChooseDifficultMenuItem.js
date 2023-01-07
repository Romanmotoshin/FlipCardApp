import {Link} from 'react-router-dom';

import './chooseDifficultMenuItem.scss'

const ChooseDifficultMenuItem = ({size}) => {

    return (
        <div className="difficult-menu__item">
            <Link className='difficult-menu__link' to={`/${size}x${size}`}><span className='left-rotate'>{size}</span><span>x</span><span className='right-rotate'>{size}</span></Link>
        </div>
    );
};

export default ChooseDifficultMenuItem;