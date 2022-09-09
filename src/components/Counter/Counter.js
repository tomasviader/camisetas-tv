
import './Counter.scss'

const Counter = ({ max, counter, setCounter, handleAgregar }) => {

    
    /* const [comprar, setComprar] = useState(true) */

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
                <button 
                    className='carry-button-normal'/* { comprar ? "carry-button-normal" : "carry-button-success" } */ 
                    onClick={handleAgregar} 
                >
                    Agregado {/*  { comprar ? "Agregar al carrito" : "Agregado" } */}
                </button>
            </div>
        </div>
    )
}

export default Counter;