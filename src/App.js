import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Contacto from './components/Contacto/Contacto.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';





const App = () => {

  

  return (
    <div>
      
    <CartProvider>

        <BrowserRouter>

          <Header/>
          
          <Routes>
            <Route path='/' element= { <ItemListContainer/>} />
            <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
            <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />

            { <Route path='/contacto' element= { <Contacto/> } />}
            { <Route path='/carrito' element= { <Cart/> } />}
            {/* <Route path='*' element={ <h1>ERROR</h1> }/> */}
            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>

          <Footer/>

        </BrowserRouter>

    </CartProvider>

    </div>
  );
}

export default App;
