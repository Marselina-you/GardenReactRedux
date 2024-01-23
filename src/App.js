//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';

import MyRoutes from './Routes/MyRoutes';
import HeaderUser from './components/header-user/HeaderUser';

const App = (props) => {
  return (
   <BrowserRouter>
    <div className="App">
     <Header />
     <HeaderUser/>
     <MyRoutes/>
     
    </div>
   </BrowserRouter>
   
    
  );
}

export default App;
