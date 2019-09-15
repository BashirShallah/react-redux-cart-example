import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../api/products";

export default class Cart extends React.Component{

    state = {
        products: [],
    };

    componentDidMount(){
        ProductsApi.getAll()
            .then( data => {
                this.setState({
                    products: data
                })
            });
    }

    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {this.state.products.map(product => 
                        <div className={'col-3'} key={product.id}>
                            <CartItem product={product} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: 3000
                </h3>

                <button className="btn btn-primary btn-block">Pay</button>
            </div>
        );
    }
}
