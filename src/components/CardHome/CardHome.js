import './CardHome.scss'
import './CardLabel/CardLabel'
import image from './../../assets/cardHome.jpg'
import CardLabel from './CardLabel/CardLabel'

const CardHome = ( {text= 'Text'} ) => {

    return (
        <div className="cards">
            <div className='imagenInicio'> <img  src={image} alt=""/> </div>
            <CardLabel/>
        </div>
    )
}

export default CardHome;