import React, {Component} from 'react';
import Filter from "./components/Filter";
import Products from "./components/Products";

const ProductsPage = () => {
    return (
        <>
            <div className="container mt-5 mb-3 text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <Filter/>
                        <hr/>
                        <Products/>
                    </div>
                </div>
            </div>
            <hr className='my-5'/>
        </>
    );
}

export default ProductsPage;
