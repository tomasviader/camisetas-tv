import './Header.scss'


const Header = () => {

    return (
        <header className="bg-header">
        <div className="header-container">

            <h1 className="header-title">CF</h1>

            <nav className="header-navbar">
                <a className="header-navlink">HOME</a>
                <a className="header-navlink">CAMISETAS</a>
                <a className="header-navlink">CARRITO</a>
            </nav>
        </div>        
        </header>
    )
}

export default Header;
