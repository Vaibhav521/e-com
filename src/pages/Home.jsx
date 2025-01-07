import React, { useEffect } from 'react';
import CartStatus from '../components/CartStatus';
import ProductList from '../components/ProductList';
import ProductSectionHeader from '../components/ProductSectionHeader';
import Header from '../components/Header';
const Home = () => {

  return (
    <div>
      <CartStatus /> 
    
    <Header />

      <ProductSectionHeader showSearchBar={true} showFilter={true} showCategoriesPills={true}  />

      <ProductList />
    </div>

  );
};

export default Home;

