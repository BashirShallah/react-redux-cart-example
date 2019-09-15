import React from "react";
import "./CartIcon.css";

export default function CartIcon(){
    return <div id="cart-icon">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badge-danger">2</span>
    </div>
}
