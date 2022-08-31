import './Item.scss'

const Item = ( {producto} ) => {

    return (
        <div className="item-div" key={producto.id}>
            <img src={producto.img} alt={producto.nombre}/>
            <h3>${producto.precio}</h3>
            <h6>{producto.nombre}</h6>
        </div>
    )
}

export default Item