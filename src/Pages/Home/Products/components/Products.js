import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../../../actions/productActions";
import {addToCart} from "../../../../actions/cartActions";

const Products = (props) => {
    useEffect(() => {
        props.fetchProducts();
    }, [])


    const productItems = props.products.map((product) => (
        <div className="col-md-4" key={product.id}>
            <div className="img-thumbnail text-center m-2">
                <a
                    href={`#${product.id}`}
                    onClick={(e) => props.addToCart(props.cartItems, product)}
                >
                    <img src={`products/${product.sku}_2.jpg`} alt={product.title}/>
                    <p onClick={(e) => e.preventDefault()}>{product.title}</p>
                </a>
                <b>{product.price}</b><br/>
                <button
                    className="btn btn-primary mb-3 mt-2"
                    onClick={(e) => props.addToCart(props.cartItems, product)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    ));

    return <div className="row">{productItems}</div>;
}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
