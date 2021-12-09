import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {Home, About, SingleProducts, Error, Cart, Checkout, Products} from './pages';

function App() {
  return (
    <Router>
    <Navbar/>
    <Sidebar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:id" children={<SingleProducts/>}/>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
