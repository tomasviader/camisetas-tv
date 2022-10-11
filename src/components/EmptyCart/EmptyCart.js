import { Link } from 'react-router-dom'
import './EmptyCart.scss'

const EmptyCart = () => {

    return (
        <div className="div-empty-cart">  
            <h2>Carrito Vacio!</h2>
            <button className="but-volver">
                <Link to='/'>Volver a Inicio</Link>
            </button>
        </div>
    )
}

export default EmptyCart