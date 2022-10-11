import './App.css';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import AppRouter from './router/AppRouter';


const App = () => {

  
  return (
    <div>
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>  
    </div>
  );
}

export default App;
