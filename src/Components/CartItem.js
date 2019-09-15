import React from "react";

export default function ProductItem(props){
    const {product} = props;

    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price {product.price}$
                    <br />
                    Quantity: 1
                    <br />
                    Total: {product.price}
                </p>
                <a href="#" className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </a>
            </div>
        </div>
    );
}
