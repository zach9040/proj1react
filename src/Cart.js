import React from "react";
import "./styles/cart.css";
import ReactDOM from "react-dom";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {

  render() {
    return (
        <div className="ui cards" >
            {ProductData.products.map(data => (<Product productName = {data.name} price = {data.cost} limit = {data.stock} />))}
        </div>
      
    );
  }

}

export default Cart;
