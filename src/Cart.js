import React from "react";
import "./styles/cart.css";
import ReactDOM from "react-dom";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems : []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(p, product) {
        let exists = false;
        let arr = [...this.state.cartItems];
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].productName === product) {
                arr[i].count += 1;
                this.setState({cartItems : arr});
                exists = true;
            }
        }
        if (!exists) {
            let list = arr.concat([{productName : product, price : p, count : 1}]);
            this.setState({
                cartItems : list
            }) ;
        }
    }

  render() {
    return (
        <div className="ui cards" >
            {ProductData.products.map(data => (<Product productName = {data.name} price = {data.cost} onAddToCart = {this.handleAddToCart} />))}
            {<Receipt items={this.state.cartItems}/>}
        </div>

      
    );
  }

}

export default Cart;
