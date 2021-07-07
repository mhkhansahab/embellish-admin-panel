import React from 'react';
import "./productList.css";
import Card from "./../../atoms/card/card";

function ProductList() {

    const productsData = [];

    return (
        <div className="product-list flex">
            {
                productsData ? 
                productsData.map((item)=>{
                    return(
                        <Card key={item._id} type={item.category.name} name={item.name} image={item.image} price={item.price}></Card>
                    )
                }) 
                :
                 null
            }                
        </div>
    );
}

export default ProductList;
