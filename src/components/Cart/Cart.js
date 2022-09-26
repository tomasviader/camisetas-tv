import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"



const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div>
            <h1>Carrito</h1>
            <hr/>

            {   cart.map((item) => (
                //Armar Cartitem
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>Precio: {item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Talle: {item.talle}</p>
                        <button onClick={ () => removeItem(item.id) } > Eliminar producto </button>
                        <hr/>
                    </div>
                    
                ))
            }

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