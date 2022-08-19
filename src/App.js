import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import CardHome from './components/CardHome/CardHome';


const App = () => {

  return (
    <div>
      <Header/>
      <CardHome text = 'Comprar'/>
      <Footer/>
      
    </div>
  );
}

export default App;
