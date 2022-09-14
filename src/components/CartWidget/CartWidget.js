import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import './CartWidget.scss'

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <>
            {
                cartQuantity() === 0
                
                ? null
                
                :   <div className='header-nav-cart'>
                        <Link to='/carrito'>
                            <span>{cartQuantity()}</span>
                            <img src='../../../images/carro-de-la-carretilla.png' alt=''/>
                        </Link>
                    </div>               
            }
        </>
    )
}

export default CartWidget