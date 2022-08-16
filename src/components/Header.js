import logo from '../logo512.png'


const Header = () => {

    return (
        <header>
            <nav>
                <img src='{logo}'/>
                <ul>
                    <li> <a>Home</a> </li>
                    <li> <a>Nosotros</a> </li>
                    <li> <a>Contacto</a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
