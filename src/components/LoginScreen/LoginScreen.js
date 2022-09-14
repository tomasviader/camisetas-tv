import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'

const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login({
            email, pass
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type={'email'}
                value={email}
                onChange={handleEmailChange}
                />
                <input 
                type={'password'}
                value={pass}
                onChange={handlePassChange}
                />
                <button type='submit'>Ingresar</button>
            
            </form>
            
        </div>
    )
}

export default LoginScreen