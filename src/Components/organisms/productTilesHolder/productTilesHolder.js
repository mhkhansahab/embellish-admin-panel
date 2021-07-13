import React from "react";
import "./productTilesHolder.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./../../atoms/productCard/productCard";
import { deleteProduct } from "./../../../Store/action/actions";

function ProductTilesHolder(props) {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  
  const productRemover = (id) => {
    dispatch(deleteProduct({id : id}));
  };
  
  const productEditor = (id)=>{
      props.modalController("edit", id, "product")
  }

  return (
    <div className="product-tiles">
      {productsData.map((product) => {
        return (
          <ProductCard
            key = {product._id}
            img = {product.image}
            name={product.name}
            description={product.description}
            quantity={product.quantity}
            price_pkr={product.price_pkr}
            price_ind={product.price_ind}
            price_uae={product.price_uae}
            category = {product.category}
            sizes = {product.sizes.join(", ")}
            colors = {product.colors.join(", ")}
            productRemover = {()=>productRemover(product._id)}
            productEditor = {()=>productEditor(product._id)}
          />
        );
      })}
    </div>
  );
}

export default ProductTilesHolder;
