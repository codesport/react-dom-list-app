import React from 'react';
import {ALLPRODUCTS} from './datastore_allProducts';
import Header from './Header';
import ProductList from './ProductList';


function App() {
  return (
    <React.Fragment>
      <Header myLength={ALLPRODUCTS.length}/>
      <ProductList allProducts={ALLPRODUCTS} />
    </React.Fragment>
  );
}

export default App;
