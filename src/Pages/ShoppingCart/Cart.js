import React, {Component} from "react";
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../../actions/cartActions";
import Footer from "./Footer";

class Cart extends Component {
    render() {
        const {cartItems} = this.props;

        return (
            <>
                <div className=' mx-3 mx-md-5 row'>
                    <div className="col-md-8">
                        <div className="alert alert-info mt-5">
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
                                            <th scope="col" className='text-center'>Number Of Products</th>
                                            <th scope="col">Total</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td><strong>$</strong>{item.price}</td>
                                                <td className='text-center'>{item.count}</td>
                                                <td><strong>$</strong>{item.price * item.count}</td>
                                                <button
                                                    className='bg-danger rounded border-0 mt-2 text-white'
                                                    onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}>
                                                    x
                                                </button>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <hr/>
                                    <button
                                        className='btn btn-danger m-2'
                                        onClick={() => alert('Thanks for shopping with us!')}>
                                        Next
                                    </button>
                                    <button
                                        className='btn btn-secondary m-3'
                                        onClick={() => alert('You cancel the order')}>
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 text-left">
                        <div className='alert alert-primary text-dark'>
                            <h4 className='mb-3'>Summary</h4>
                            <div className="form-group mb-2">
                                <input type="number" className="form-control-sm border-0" id="coupon"
                                       placeholder="ENTER COUPON CODE"/>
                            </div>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th scope="row" className='text-uppercase h6'>subtotal</th>
                                    <td><strong>$</strong>
                                        {
                                            cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className='text-uppercase h6'>shipping</th>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <th scope="row" className='text-uppercase h6'>taxes</th>
                                    <td><strong>$</strong>13</td>

                                </tr>
                                <tr>
                                    <td>
                                        <hr/>
                                    </td>
                                    <td>
                                        <hr/>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row" className='text-uppercase h5'>Total</th>
                                    <td><strong>$</strong>
                                        {
                                            cartItems.length > 0 ? cartItems.reduce((a, c) => a + c.price * c.count, 0) + 13 : 0
                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>

        );
    }
}

const mapStateToProps = (state) => (
    {
        cartItems: state.cart.items,
    }
);
export default connect(mapStateToProps,
    {
        addToCart, removeFromCart
    }
)(Cart);
