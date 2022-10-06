import { useCartContext } from "../../context/CartContext"
import './CartItem.scss'

const CartItem = ( {item} ) => {
    const { removeItem } = useCartContext()
    return (
        <div className="cart-item-div" key={item.id}>
            <div className='cart-item-label'>
                <p className="p-name">{item.nombre}</p>
                <p className="p-price">${item.precio}</p>
                <p className="p-cantidad">{item.cantidad}</p>
                <p>{item.talle}</p>
                <button className="button-eliminar-producto" title="Eliminar camiseta" onClick={ () => removeItem(item.id) } >X</button>
            </div>
        </div>
    )
}


export default CartItem