import React from 'react';


/*
const listItem = (props) =>{

    let listItem=''

    if (props.newCategory) {
        listItem ='<ol><li>' + {props.name}+ '</li>'
    } else
        listItem =<li>{props.name}+</li>       
}
*/
function ProductsPanel(props){

    let categoryHeader =''

    if( props.category ) {
       categoryHeader = <h3>{props.category}</h3>
    } else{
        categoryHeader=''
    }
    
    return (
        <React.Fragment>   
            {categoryHeader}
            <li>{props.name}</li>
           {/*<li>{props.meta}</li> */}

        </React.Fragment>
    )

}


export default ProductsPanel;