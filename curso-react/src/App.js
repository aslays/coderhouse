//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import CartContainer from './components/cartContainer/cartContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
//import { useState } from 'react';
import { CartContextProvider } from './context/cartContext';
//import { //useContext, // useState} from 'react';



function App() {

  //const [cartProducts, setCartProduct] = useState([])

  //const cart = useContext(CartContext)

  
  //setCart("testito2")
  
  return (
    
    <CartContextProvider>
      <BrowserRouter>
        <NavBar  />
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

          <Route path = "/category/:id">
            <ItemListContainer/>
          </Route>

        </Switch>

      </BrowserRouter>    
    </CartContextProvider>
  )
}

export default App;
