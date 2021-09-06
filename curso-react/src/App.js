//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return [
    
    <NavBar/>,
    <ItemListContainer title = 'Producto Ejemplo' description_short='Descripción corta'/>    
        
  ]
}

export default App;
