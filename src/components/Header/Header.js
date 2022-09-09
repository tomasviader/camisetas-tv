import './Header.scss';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <header className="bg-header">
        <div className="header-container">

            <Link to="/" className="header-title">CF</Link>
                

            <nav className="header-navbar">
                <Link to='/productos/mundial' className="header-navlink">Mundial</Link>
                <Link to='/productos/argentina' className="header-navlink">Argentina</Link>
                <Link to='/productos/clubes' className="header-navlink">Clubes</Link>

                <Link to='/contacto' className="header-navlink">Contacto</Link>

                <Link to='/carrito' className="header-navlink">
                    <img src='../../../images/carro-de-la-carretilla.png' alt=''/>
                </Link>
            </nav>
        </div>        
        </header>
    )
}

export default Header;
