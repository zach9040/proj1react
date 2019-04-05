import React from "react";
import ProductData from "./Data";
import Product from "./Cart";

class Receipt extends React.Component {
    renderItem(item) {
        return (
            <div className="receipt-item" key={item.productName}>
                <div className="receipt-text">
                    {item.productName} x {item.count}
                </div>
                <div className="receipt-text">
                    ${item.count * item.price}
                </div>
            </div>
        );
    }

    totalCart() {
        let total = 0;
        for (let a = 0; a < this.props.items.length; a += 1) {
            total += this.props.items[a].count * this.props.items[a].price;
        }
        return (
            <span>{total}</span>
        );
    }


    render() {
        return (
            <div className="receipt">
                <h2 className="receipt-text">Receipt</h2>
                {this.props.items.map(this.renderItem)}
                <div className="receipt-item">
                    <div className="total">Total:</div>
                    <div className="total">${this.totalCart()}</div>
                </div>
            </div>
        );
    }
}

export default Receipt;