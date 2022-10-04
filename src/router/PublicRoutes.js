import { Routes, Route, Navigate } from 'react-router-dom'
import FormAddProduct from '../components/FormAddProduct/FormAddProduct'
import LoginScreen from '../components/LoginScreen/LoginScreen'



const PublicRoutes = () => {


    return (
        
        <Routes>
            <Route path='/login' element= { <LoginScreen/> } />
            <Route path='*' element={ <Navigate to='/login'/> }/>
            <Route path='/addProduct' element= { <FormAddProduct/> }/>
        </Routes>
    )
}

export default PublicRoutes