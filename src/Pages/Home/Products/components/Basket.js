import React, { Component } from "react";
import { connect } from "react-redux";
import {addToCart, removeFromCart} from "../../../../actions/cartActions";
class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info sticky-top">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
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
                        onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}>
                      x
                    </button>
                  </tr>
              ))}
              </tbody>
            </table>
            <hr/>

            <h5 className='text-dark ml-2 font-weight-normal'>Total Price:&nbsp;<strong>$</strong>
              {
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              }
            </h5>
            <button
                className='btn btn-danger mt-3'
                onClick={() => alert('Thanks for shopping with us!')}>
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
