import { useState } from "react"
import './CardLabel.scss'

const CardLabel = () => {

    const [counter, setCounter] = useState(0)
    const [comprar, setComprar] = useState(true)

    const handleSumar = () => {
        setCounter(counter + 1)
    }
    const handleRestar = () => {
        if (counter > 0 ) {
            setCounter(counter - 1)
        }
    }
    const handleComprar = () => {
        setComprar(!comprar)
    }
    
    return (
        <div className="card-label">
            <div className="card-label-buttons">
                <button onClick={handleRestar}>-</button>
                <span>{counter}</span>
                <button onClick={handleSumar}>+</button>
            </div>

            <div className="carry-button">
                <button 
                    className={ comprar ? "carry-button-normal" : "carry-button-success" } onClick={handleComprar} 
                    >
                    { comprar ? "Agregar al carrito" : "Ir a carrito!" }
                </button>
            </div>
        </div>
    )
}

export default CardLabel;