import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
/* import Contacto from './components/Contacto/Contacto.js'; */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';




const App = () => {



  return (
    <div>

      <BrowserRouter>

        <Header/>
        
        <Routes>
          <Route path='/' element= { <ItemListContainer/>} />
          <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />

          {/* <Route path='/Contacto' element= { <Contacto/> } /> */}
          {/* <Route path='*' element={ <h1>ERROR</h1> }/> */}
          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>

        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
