
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Counter.scss'

const Counter = ({ max, counter, setCounter, handleAgregar }) => {
   /*  const [add, setAdd] = useState(true) */

    const handleSumar = () => {
        if (counter < max){
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > 0 ) {
            setCounter(counter - 1)
        }
    }

    
    return (
        <div className="card-label">
            <div className="card-label-buttons">
                <button onClick={handleRestar}>-</button>
                <span>{counter}</span>
                <button onClick={handleSumar}>+</button>
            </div>

            <div className="carry-button">
            <Link to='/carrito'>
                <button 
                    className='carry-button-normal' 
                    onClick={handleAgregar} 
                >
                    Agregar al carrito {/* { add ? "Agregar al carrito" : "Agregado" } */}
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Counter;