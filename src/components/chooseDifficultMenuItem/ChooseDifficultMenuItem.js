import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { createGame } from '../../store/gameSlice';

import './chooseDifficultMenuItem.scss'

const ChooseDifficultMenuItem = ({size}) => {

    const dispatch = useDispatch()

    return (
        <div className="difficult-menu__item">
            <Link 
                onClick={() => dispatch(createGame(size))} 
                className='difficult-menu__link' to={`/game`}>
                    <span className='left-rotate'>{size}</span>
                    <span>x</span>
                    <span className='right-rotate'>{size}</span>
            </Link>
        </div>
    );
};

export default ChooseDifficultMenuItem;