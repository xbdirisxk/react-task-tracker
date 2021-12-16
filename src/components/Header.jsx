import '../index.css';
import Button from './button';

const Header = ({ onShow, changeBtn }) => {
	return (
		<header className='header'>
			<h1>Task Tracker</h1>
			<Button
				text={changeBtn ? 'Hide' : 'Add'}
				color={changeBtn ? 'red' : 'green'}
				onClick={onShow}
			/>
		</header>
	);
};

export default Header;
