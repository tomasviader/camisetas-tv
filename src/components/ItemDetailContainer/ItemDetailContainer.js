import pedirDatos from "../../helpers/pedirDatos"
import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .catch( (error) =>{
                console.log(error)
            })
            .finally( () =>{
                setLoading(false)
            })
    }, [itemId])
    

    return (
        <div >

            {
                loading
                ? <Loader/>
                :<ItemDetail item={item}/>
            }       

        </div>
    )
}

export default ItemDetailContainer