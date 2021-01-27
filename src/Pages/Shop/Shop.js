import React, {Component} from 'react';
import Filter from "../Home/Products/components/Filter";
import Products from "../Home/Products/components/Products";
import Basket from "../Home/Products/components/Basket";

class Shop extends Component {
    render() {
        return (
            <div className="mx-3 mx-md-5 mt-5 mb-3 text-dark">
                <div className="row">
                    <div className="col-md-8">
                        <Filter/>
                        <hr/>
                        <Products/>
                    </div>
                    <div className="col-md-4">
                        <Basket/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
