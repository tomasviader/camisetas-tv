import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from '../firebase/config'

const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoryId
                    ? query(productosRef, where( 'category', '==', categoryId) )
                    : productosRef
        getDocs(q)
            .then((snapshot) => {
                const productosDB = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [categoryId])

    return ({
        productos,
        loading
    })
}

export default useProductos