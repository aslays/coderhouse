//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import CartContainer from './components/cartContainer/cartContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  return [
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        
        <Route exact path = "/">
          <ItemListContainer/>
        </Route>

        <Route exact path = "/cart">
          <CartContainer/>
        </Route>

        <Route path = "/product/:id">
          <ItemDetailContainer/>
        </Route>

      </Switch>

    </BrowserRouter>    
  ]
}

export default App;
