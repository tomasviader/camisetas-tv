import { Link } from "react-router-dom"
import './FinishButton.scss'


const FinishButton = () => {

    return (
        <div>
            <Link to='/carrito' >
                <button className="bt-finish">
                    Terminar compra 
                </button>
            </Link>
        </div>
    )
}

export default FinishButton