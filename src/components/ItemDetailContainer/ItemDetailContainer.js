import Loader from "../Loader/Loader"
import ItemDetail from "../ItemDetail/ItemDetail"
import useProductDetail from '../../hooks/useProductDetail'

const ItemDetailContainer = () => {
    const { item, loading } = useProductDetail()

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