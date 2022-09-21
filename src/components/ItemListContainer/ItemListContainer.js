import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {

        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoryId
                    ? query(productosRef, where( 'category', '==', categoryId) )
                    : productosRef

        getDocs(q)
            .then((snapshot) => {
                const productosDB = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )
                setProductos(productosDB)
            })
            .finally( () => {
                setLoading(false)
            })

    }, [categoryId ])
    
    return(
        <div className='block-cards'>
            <div className='cards'>
                {
                    loading
                    ? <Loader/>
                    : <ItemList productos={productos}/>
                }
            </div>
        </div>
    )
}

export default ItemListContainer