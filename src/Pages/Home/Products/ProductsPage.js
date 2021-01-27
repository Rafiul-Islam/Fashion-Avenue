import React, {Component} from 'react';
import Filter from "./components/Filter";
import Products from "./components/Products";
import Basket from "./components/Basket";

class ProductsPage extends Component {

    render() {
        return (
            <div className="container mt-5 mb-3 text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <Filter/>
                        <hr/>
                        <Products/>
                    </div>
                    {/*<div className="col-md-4">*/}
                    {/*    <Basket/>*/}
                    {/*</div>*/}
                </div>
                <hr className='my-5'/>
            </div>
        );
    }
}

export default ProductsPage;
