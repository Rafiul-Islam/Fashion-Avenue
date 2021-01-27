import React, {Component} from "react";
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../../../../actions/cartActions";
import {useHistory} from "react-router-dom";


const Basket = (props) => {
    const {cartItems} = props;
    const history = useHistory()
    const redirect = () => {
        history.push('/cart');
    }
    return (
        <div className="alert alert-info sticky-top">
            {cartItems.length === 0 ? (
                "Basket is empty"
            ) : (
                <div>
                    You have {cartItems.length} items in the basket. <hr/>
                </div>
            )}
            {cartItems.length > 0 && (
                <div>
                    <table className="table table-striped table-bordered">
                        <thead className="text-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Count</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td><strong>$</strong>{item.price}</td>
                                <td>{item.count}</td>
                                <td><strong>$</strong>{item.price * item.count}</td>
                                <button
                                    className='bg-danger rounded border-0 mt-2 text-white'
                                    onClick={(e) => props.removeFromCart(props.cartItems, item)}>
                                    x
                                </button>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <hr/>
                    <button
                        className='btn btn-secondary mt-3'
                        onClick={redirect}>
                        Go To Cart
                    </button>
                </div>
            )}
        </div>
    );
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, {addToCart, removeFromCart})(Basket);
