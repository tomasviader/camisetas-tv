import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to='/carrito'>
            <span>{cartQuantity()}</span>
            <img src='../../../images/carro-de-la-carretilla.png' alt=''/>
        </Link>
    )
}

export default CartWidget