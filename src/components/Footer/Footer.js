import { Link } from 'react-router-dom';
import './Footer.scss'
import { SiWhatsapp, SiGooglemaps, SiFacebook, SiGmail   } from "react-icons/si";


const Footer = () => {

    return (
        <footer>
            <div className='div-seguinos'>
                <p>Seguinos!</p>
                <Link to='/' className='footer-links wp'> <SiWhatsapp/> </Link>
                <Link to='/' className='footer-links maps'> <SiGooglemaps/> </Link>
                <Link to='/' className='footer-links fb'> <SiFacebook/> </Link>
                <Link to='/contacto' className='link-contacto'> <p>Tenes alguna consulta? Contactanos! <SiGmail/></p> </Link> 
            </div>
        </footer>
    )
}

export default Footer;
