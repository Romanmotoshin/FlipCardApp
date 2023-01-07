import ChooseDifficultMenuItem from '../chooseDifficultMenuItem/ChooseDifficultMenuItem';

import './chooseDifficultMenu.scss'

const ChooseDifficultMenu = () => {
    return (
        <div className="difficult-menu">
            <div className='difficult-menu__items'>
                <ChooseDifficultMenuItem size={2}/>
                <ChooseDifficultMenuItem size={4}/>
                <ChooseDifficultMenuItem size={6}/>
                <ChooseDifficultMenuItem size={8}/>
            </div>
        </div>
    );
};

export default ChooseDifficultMenu;