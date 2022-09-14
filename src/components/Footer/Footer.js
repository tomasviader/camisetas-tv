import { Link } from 'react-router-dom';
import './Footer.scss'


const Footer = () => {

    return (
        <footer>
            <div>
                <Link to='/' className='footer-links'>WhatsApp</Link>
                <Link to='/' className='footer-links'>Ubicacion</Link>
                <Link to='/' className='footer-links'>Facebook</Link>
            </div>
        </footer>
    )
}

export default Footer;
