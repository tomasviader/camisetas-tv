import './Item.scss'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {

    return (
        <div className="item-div" key={producto.id}>
            <img src={producto.imgHome} alt={producto.nombre}/>
            <div className='item-label'>
                <h3>${producto.precio}</h3>
                <h6>{producto.nombre}</h6>
                <Link to={`/item/${producto.id}`} className='but-see-more'>Ver mas</Link>
            </div>
            
        </div>
    )
}

export default Item