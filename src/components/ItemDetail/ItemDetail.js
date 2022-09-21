import Counter from '../Counter/Counter'
import './ItemDetail.scss'
import { useState } from 'react'
import Select from '../Select/Select'
import { useCartContext } from '../../context/CartContext'
import FinishButton from '../FinishButton/FinishButton'

const ItemDetail = ( {item} ) => {


    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)


    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(item.talles[0].value)


    const handleAgregar = () =>{
        
        const itemToCart = {
            id: item.id,
            precio:item.precio,
            nombre: item.nombre,
            talle,
            cantidad
        }


        addToCart(itemToCart)

    }


    return (
        <div className="item-detail">
            <img src={item.imgDetail} alt={item.nombre}/>
            <div className="item-detail-data">
                <h3>{item.nombre}</h3>
                <h4>${item.precio}</h4>
                
                <Select talles={item.talles} onSelect={setTalle}/>

                { 
                    isInCart(item.id)
                    ?   <FinishButton/>
                    :   <Counter
                        max={item.stock} 
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar= {handleAgregar}
                        />
                }

            </div>
        </div>
    )
}

export default ItemDetail
