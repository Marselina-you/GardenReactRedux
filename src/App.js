//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './components/cart/Cart';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';

import CategoriesContainer from './components/categories/CategoriesContainer';
import FeedbacksContainer from './components/feedbacks/FeedbacksContainer';
import ProductsContainer from './components/products/ProductsContainer';



const App = (props) => {
  return (
   <BrowserRouter>
    <div className="App">
     <Header />
     
   
   

     
  
<Routes>
  <Route path='/products' element={<ProductsContainer/> }/>
  <Route path='/contacts' element={<Contacts/> }/>
  <Route path='/categories' element={<CategoriesContainer/> }/>
  <Route path='/cart' element={<Cart/> }/>
  
</Routes>
<FeedbacksContainer />
    </div>
   </BrowserRouter>
   
    
  );
}

export default App;
