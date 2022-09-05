import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
const App = () => {

  return (
    <div>
      <Header/>

      <ItemDetailContainer/>
      {/* <div className='block-cards'> <ItemListContainer/> </div> */}
      
      <Footer/>
      
    </div>
  );
}

export default App;
