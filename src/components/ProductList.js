/* eslint-disable no-unused-expressions */
import React from 'react';
import ProductsPanel from './ProductsPanel';

/*
const allProducts = 
    [
        {category:"Food", name: "Cashews", price: "$49.99", stocked: true},
        {category:"Food", name: "Raisans", price: "$9.99", stocked: true},
        {category:"Food", name: "Rice", price: "$29.99", stocked: false},
        {category: "Clothes", name: "Button Collar Oxford", price: "$99.99", stocked: true},
        {category: "Clothes", name: "Tweed Vest", price: "$399.99", stocked: false},
        {category: "Clothes", name: "Pasily Ascot", price: "$399.99", stocked: false},
        {category: "Supplies", name: "Laptop", price: "$199.99", stocked: true,},
        {category: "Supplies", name: "Briefcase", price: "$199.99", stocked: true,}
    ];
*/

const buildProductListFunction = (previousCategory, singleProduct, index) =>{

    if (previousCategory[index-1] !== singleProduct.category ){
        
        previousCategory.push( singleProduct.category )

        return(
            <ProductsPanel 
                category={singleProduct.category}
                name={singleProduct.name}
                key={index}
                newCategory={true}
                meta={previousCategory[index-1] /*+ ' previousCategory array length = '+ previousCategory.length*/}
     
            />   
        )    

    } else {
        previousCategory.push( singleProduct.category )

        return(
            <ProductsPanel 
                name={singleProduct.name}
                key={index} 
                newCategory={false}   
                meta={previousCategory[index-1] /* + '<b> previousCategory array length =</b> '+ previousCategory.length*/}
     
   
            />   
        )  
    }
}




function ProductList(props){

    let previousCategory=[];
    
    return(
        <React.Fragment>
        <hr/>
        {props.allProducts.map( (singleProduct, index) => 

            buildProductListFunction (previousCategory, singleProduct, index)
/*
                <ProductsPanel 
                    category={getHeader(previousCategory, singleProduct.category)}
                    name={singleProduct.name}
                    key={index}    
                    previousCategory = {singleProduct.category}
                    
                />
*/
            
        )}
        </React.Fragment>
    );
}
    
export default ProductList;