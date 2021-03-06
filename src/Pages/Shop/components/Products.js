import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../../../actions/productActions";
import {addToCart} from "../../../../actions/cartActions";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const productItems = this.props.products.map((product) => (
            <div className="col-md-4" key={product.id}>
                <div className="img-thumbnail text-center m-2">
                    <a
                        href={`#${product.id}`}
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                    >
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>{product.title}</p>
                    </a>
                    <b>{product.price}</b><br/>
                    <button
                        className="btn btn-primary mb-3 mt-2"
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        ));

        return <div className="row">{productItems}</div>;
    }
}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
