import CartContext, { useCartContext } from "../../context/CartContext"



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
                        {/* <button onClick={ () => removeItem(item.id) } > boton de trash </button> */}
                        <hr/>
                    </div>
                    
                ))
            }
            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart()}>Vaciar carrito</button>

        </div>
    )
}

export default Cart