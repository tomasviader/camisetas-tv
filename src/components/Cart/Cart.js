import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"



const Cart = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()

    return (
        <div>
            <h1>Carrito</h1>
            <hr/>
            { cart.map((item) => <CartItem item={item} key={item.id}/>) }
            <h4>Total: ${cartTotal()}</h4>
            {
                cartTotal() === 0

                ?   <>
                        <h2>Carrito Vacio!</h2>
                        <button>
                            <Link to='/'>Volver a Inicio</Link>
                        </button>
                    </>
                
                :   <>
                        <button onClick={()=> emptyCart()}>Vaciar carrito</button>
                        <Link to="/checkout">Terminar mi compra</Link>
                    </> 
            }

        </div>
    )
}

export default Cart