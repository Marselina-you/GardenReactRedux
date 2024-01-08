//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './components/cart/Cart';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Services from './components/services/Services';
import Feedbacks from './components/feedbacks/Feedbacks';
//import Categories from './components/categories/Categories';
import CategoriesContainer from './components/categories/CategoriesContainer';



const App = (props) => {
  return (
   <BrowserRouter>
    <div className="App">
     <Header />
     <Feedbacks />
   <CategoriesContainer />
   

     
  
<Routes>
  <Route path='/products' element={<Products/> }/>
  <Route path='/contacts' element={<Contacts/> }/>
  <Route path='/services' element={<Services/> }/>
  <Route path='/cart' element={<Cart/> }/>
  
</Routes>
    </div>
   </BrowserRouter>
   
    
  );
}

export default App;
