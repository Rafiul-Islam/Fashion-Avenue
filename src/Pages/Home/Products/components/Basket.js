import React, {Component} from 'react';

class Basket extends Component {
    render() {
        const {cartItems, handleRemoveFromCart} = this.props
        return (
            <div className='border-left border-dark'>
                <div className="alert alert-info">
                    {
                        cartItems.length === 0 ?
                            "Cart is empty"
                            :
                            <div>You have {cartItems.length} products in the basket</div>
                    }
                    {
                        cartItems.length > 0 &&
                        <div>
                            <table className="table table-striped table-bordered">
                                <thead className="text-dark">
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">$$</th>
                                    <th scope="col">NOI</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartItems.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td><strong>$</strong>{item.price}</td>
                                        <td>{item.count / 2}</td>
                                        <td><strong>$</strong>{item.price * (item.count / 2)}</td>
                                        <td
                                            type='button'
                                            className='text-danger pointer-event'
                                            onClick={(e) => handleRemoveFromCart(e, item)}>
                                            x
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <hr/>
                            <h5 className='text-dark ml-2 font-weight-normal'>Total Price:&nbsp;<strong>$</strong>
                                {
                                    cartItems.reduce((a, c) => a + c.price * (c.count / 2), 0)
                                }
                            </h5>
                            <button
                                className='btn btn-danger mt-3'
                                onClick={() => alert('Thanks for shopping with us!')}>
                                Checkout
                            </button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Basket;
