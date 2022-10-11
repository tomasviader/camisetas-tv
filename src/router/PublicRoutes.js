import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Contacto from '../components/Contacto/Contacto.js';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from "../components/Checkout/Checkout.js";



const PublicRoutes = () => {


    return (
        <>
            <Header/>            
            <Routes>
                <Route path='/' element= { <ItemListContainer/>} />
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
                <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />
                <Route path='/contacto' element= { <Contacto/> } />                    
                <Route path='/carrito' element= { <Cart/> } />
                <Route path='/checkout' element= { <Checkout/> } />
                <Route path='/login' element= { <LoginScreen/> } />            
                <Route path='*' element={ <Navigate to='/'/> }/>
            </Routes>
            <Footer/>
        </>
    )
}

export default PublicRoutes