import Contador from '../Contador/Contador'
import './ItemDetail.scss'

const ItemDetail = ( {item} ) => {

    return (
        <div className="item-detail">
            <img src={item.imgDetail} alt={item.nombre}/>
            <div className="item-detail-data">
                <h3>{item.nombre}</h3>
                <h4>${item.precio}</h4>
                {<Contador/>}
            </div>
        </div>
    )
}

export default ItemDetail
