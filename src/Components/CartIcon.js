import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";

export default function CartIcon(){
    return <div id="cart-icon">
        <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">2</span>
        </Link>
    </div>
}
