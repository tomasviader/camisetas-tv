import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Checkout = () => { 

    

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        
        if (values.nombre.length < 2) {
            alert('Nombre incorrecto')
            return
        }
        if (values.apellido.length < 2) {
            alert('Apellido incorrecto')
            return
        }
        if (values.email.length < 2) {
            alert('Email incorrecto')
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id) ))

        const productos = await getDocs(q)

        const outOfStock = []
        
        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            }else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() =>{
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            terminarCompra(doc.id)
                        })
                })
        }else{
            alert ("Hay items sin stock")
        }

    }

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>

                <input
                name="nombre" 
                value={values.nombre}
                onChange={handleInputChange}
                type={'text'} 
                placeholder="Nombre"
                />

                <input
                name="apellido" 
                value={values.apellido}
                onChange={handleInputChange}
                type={'text'} 
                placeholder="Apellido"
                />

                <input 
                name="email" 
                value={values.email}
                onChange={handleInputChange}
                type={'email'} 
                placeholder="Email"
                />

                <input
                name="direccion" 
                value={values.direccion}
                onChange={handleInputChange}
                type={'text'} 
                placeholder="Direccion" 
                />

                <button type="submit">Enviar</button>

            </form>



        </div>
    )
}

export default Checkout