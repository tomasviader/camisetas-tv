import { useCartContext } from "../../context/CartContext"

const CartItem = ( {item} ) => {
    const { removeItem } = useCartContext()
    return (
        <div className="cart-item-div" key={item.id}>
            <div className='cart-item-label'>
                <h3>{item.nombre}</h3>
                <h4>${item.precio}</h4>
                <p>Cantidad: {item.cantidad}</p>
                <p>Talle: {item.talle}</p>
                <button onClick={ () => removeItem(item.id) } > Eliminar producto </button>
            </div>
            
        </div>
    )
}


export default CartItem