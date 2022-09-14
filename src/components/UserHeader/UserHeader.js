import { useLoginContext } from '../../context/LoginContext';
import './UserHeader.scss'


const UserHeader = () => {
    const {user, logout} = useLoginContext()
    
    return (
        <div>
            <small>PEPE@gmail.com{user.user}</small>
            <button onClick={logout} className='bt-logout'>Cerrar Sesion</button>
        </div>
    )
}

export default UserHeader