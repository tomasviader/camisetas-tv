
import { createContext, useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const CartContext = createContext()
export default CartContext

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
        setCart( [...cart, item] )
    }

    const removeItem = (id) => {
        Swal.fire({
            title: 'Estas seguro que quieres eleminar esta camiseta del carrito?',
            text: "No vas a poder revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6d6d6d',
            cancelButtonColor: '#CE142F',
            confirmButtonText: 'Si, eliminar!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                setCart( cart.filter((item) => item.id !== id) )
                Swal.fire(
                'Eliminado!',
                'La camiseta fue eliminada del carrito.',
                'Exito'
            )
            }
        })
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc,item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc,item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No vas a poder revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            color: '#000',
            confirmButtonColor: '#6d6d6d',
            cancelButtonColor: '#CE142F',
            confirmButtonText: 'Si, eliminalo!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                setCart([])  
                Swal.fire({
                title:'Eliminado!',
                text:'Se vacio el carrito.',
                confirmButtonColor: '#6d6d6d',
                confirmButtonText: 'Ok'
            })
            }
        })
        
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: 'Tu compra se registro con exito!',
            text: `Tu numero de orden es: ${id}`,
            icon: 'sucess',
            confirmButtonColor: '#6d6d6d',
            confirmButtonText: 'Genial!'
        })
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart]) 

    return(

    <CartContext.Provider value= { { 
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        cartTotal,
        emptyCart,
        removeItem,
        terminarCompra
    } }>
        {children}
    </CartContext.Provider>

    )


}


export const useCartContext = () => {
    return useContext(CartContext)
}
