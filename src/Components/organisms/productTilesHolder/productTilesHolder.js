import React from "react";
import "./productTilesHolder.css";
import { useSelector, connect } from "react-redux";
import ProductCard from "./../../atoms/productCard/productCard";
import { deleteProduct } from "./../../../Store/action/actions";

function ProductTilesHolder(props) {
  const productsData = useSelector((state) => state.products);
  const productRemover = (id) => {
    props.deleteProduct(id);
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
            price={product.price}
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

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(ProductTilesHolder);
