import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import CardHome from './components/CardHome/CardHome';

const App = () => {

  return (
    <div>
      <Header/>
      <div className='blockCards'>
        <CardHome text = 'Comprar 1'/>
        <CardHome text = 'Comprar 2'/>
        <CardHome text = 'Comprar 3'/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
