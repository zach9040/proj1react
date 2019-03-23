import React from "react";


const Product = props => {


    let counter = 0;

    function addToCart(count) {
        alert("There are " + count + " " + props.productName + " in your Cart!");
    }

    function onClick() {
        addToCart(1); //had trouble with event listener
    }

    return (
        <div className="card">
            <div className="content">
                <div className="header"> {props.productName} </div>
                <div className="description">
                    Price: ${props.price}
                </div>
            </div>
            <div className="ui bottom attached button" onClick= {function() {onClick()}}>
                + Add to Cart
            </div>
        </div>
    );
}

export default Product;

