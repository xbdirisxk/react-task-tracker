import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: 10 }}>
            <p>Copy &copy; 2022</p>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Footer;
