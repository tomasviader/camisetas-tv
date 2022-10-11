import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import './Cart.scss'


const Cart = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()

    return (
        <div>
            {
                cartTotal() === 0

                ?   <>
                        <h2>Carrito Vacio!</h2>
                        <button>
                            <Link to='/'>Volver a Inicio</Link>
                        </button>
                    </>
                
                :   <>  <div className="div-cart">
                            <h1>Carrito</h1>
                            <div className="div-productos-cart">
                                <div className="div-referencias">
                                    <p className="p-nombre">Camiseta</p>
                                    <p className="p-precio">Precio</p>
                                    <p className="p-cantidad">Cantidad</p>
                                    <p className="p-talle">Talle</p>
                                </div>
                                { cart.map((item) => <CartItem item={item} key={item.id}/>) }
                                <div className="div-but">
                                    <button className="but-vaciar" onClick={()=> emptyCart()}>Vaciar carrito</button>
                                    <button className="but-continue"><Link to="/">Agregar mas camisetas</Link></button>
                                </div>
                                
                            </div>

                            <div className="resumen-compra">
                                <h3>Resumen compra</h3>
                                <div className="div-total">
                                    <h4 className="h4-total">Total</h4>
                                    <h4 className="h4-total-numero">${cartTotal()}</h4>
                                </div>
                                <button className="but-success"><Link to="/checkout">Finalizar compra</Link></button>
                            </div>

                        </div>
                    </> 
            }
        </div>
    )
}

export default Cart