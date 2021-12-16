import '../index.css';
import Button from './button';

const Header = ({ title }) => {
	const onClickButton = () => {
		console.log('clicked');
	};
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button text='add' color={'green'} onClick={onClickButton} />
		</header>
	);
};

export default Header;
