import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import CategoriesContainer from '../components/categories/CategoriesContainer';
import Contacts from '../components/contacts/Contacts';
import FeedbacksContainer from '../components/feedbacks/FeedbacksContainer';
import ProductsContainer from '../components/products/ProductsContainer';
import { ROUTES } from '../utils/routes';


const MyRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.CATALOG} element={< ProductsContainer/>} />
            <Route path={ROUTES.CONTACTS} element={< Contacts />} />
            <Route path={ROUTES.CATEGORIES} element={< CategoriesContainer/> }/>
           <Route path={ROUTES.CART} element={< Cart /> }/>
           <Route path={ROUTES.COMMENTS} element={< FeedbacksContainer /> }/>
        </Routes>
    );
};



export default MyRoutes;