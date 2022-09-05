import pedirDatos_2 from "../../helpers/pedirDatos_2"
import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos_2()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) =>{
                console.log(error)
            })
    }, [])
    

    return (
        <div >
            <ItemDetail item={productos}/>
        </div>
    )
}

export default ItemDetailContainer