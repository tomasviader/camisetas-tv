import './Header.scss';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import UserHeader from '../UserHeader/UserHeader';



const Header = () => {


    return (
        <header className="bg-header">

            <div className='header-user'>
                <UserHeader/>
            </div>

            <div className="header-container">
                <Link to="/" className="header-title">Camisetas TV</Link>
                <nav className="header-navbar">
                    <Link to='/productos/mundial' className="header-navlink">Mundial</Link>
                    <Link to='/productos/argentina' className="header-navlink">Argentina</Link>
                    <Link to='/productos/clubes' className="header-navlink">Clubes</Link>
                    <Link to='/contacto' className="header-navlink">Contacto</Link>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header;
