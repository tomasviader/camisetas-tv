


const ItemDetail = ({item= []}) => {

    return (
        <div>
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <h4>{item.precio}</h4>
        </div>
    )
}

export default ItemDetail
