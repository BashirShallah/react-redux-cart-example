import React from "react";
import {getById} from "../api/products";

export default class Product extends React.Component{

    state={
        loading: true,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product.name}</h1>

                        <p>Price: {product.price}$</p>

                        <p>{product.description}</p>

                        <br/><br/>

                        <input type="number" />
                        
                        <br /><br />

                        <button className="btn btn-primary">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}
