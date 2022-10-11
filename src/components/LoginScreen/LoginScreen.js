import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import useForm from '../../hooks/useForm'

const LoginScreen = () => {

    const {login } = useContext(LoginContext)
    const {values, handleInputChange} = useForm({
        email: '',
        pass:''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input 
                name='email'
                type={'email'}
                value={values.email}
                onChange={handleInputChange}
                />
                
                <input 
                name='pass'
                type={'password'}
                value={values.pass}
                onChange={handleInputChange}
                />
                <button type='submit'>Ingresar</button>
            
            </form>
            
        </div>
    )
}

export default LoginScreen