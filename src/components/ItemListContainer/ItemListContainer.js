import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import useProductos from '../../hooks/useProductos'


const ItemListContainer = () => {

    const { productos, loading } = useProductos()

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