import './CardHome.scss'

const CardHome = ( {text= 'Text'} ) => {

    return (
        <div className='blockCards'>
            {/* <img src="/public/assets/cardHome.jpg"></img> */}
            <div className="cards">
                <div className='cards-label'><p>{text}</p></div>
            </div>
            <div className="cards">
                <div className='cards-label'><p>{text}</p></div>
            </div>
            <div className="cards">
                <div className='cards-label'><p>{text}</p></div>
            </div>
        </div>
    )
}

export default CardHome;