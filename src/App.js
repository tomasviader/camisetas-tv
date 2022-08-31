import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <div>
      <Header/>

      <div className='block-cards'> <ItemListContainer/> </div>

      <Footer/>
      
    </div>
  );
}

export default App;
