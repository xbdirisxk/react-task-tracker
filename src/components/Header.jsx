import '../index.css';
import { useLocation } from 'react-router-dom';
import Button from './button';

const Header = ({ onShow, changeBtn }) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' ? (
                <Button
                    text={changeBtn ? 'Hide' : 'Add'}
                    color={changeBtn ? 'red' : 'green'}
                    onClick={onShow}
                />
            ) : null}
        </header>
    );
};

export default Header;
