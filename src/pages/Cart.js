import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../api/products";
import {connect} from "react-redux";

class Cart extends React.Component{
    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {this.props.cartItems.map(item => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total}
                </h3>

                <button className="btn btn-primary btn-block">Pay</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log({state})
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

export default connect(mapStateToProps)(Cart);
