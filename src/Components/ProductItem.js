import React from "react";

export default function ProductItem(){
    return (
        <div className="card">
            <img src={'/imgs/1.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Price 100$
                </p>
                
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}
