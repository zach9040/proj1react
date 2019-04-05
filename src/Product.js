import React from "react";


const Product = props => {


    return (
        <div className="card">
            <div className="content">
                <div className="header"> {props.productName} </div>
                <div className="description">
                    Price: ${props.price}
                </div>
            </div>
            <div className="ui bottom attached button" onClick= {() => props.onAddToCart(props.price, props.productName)}>
                + Add to Cart
            </div>
        </div>
    );
}

export default Product;

