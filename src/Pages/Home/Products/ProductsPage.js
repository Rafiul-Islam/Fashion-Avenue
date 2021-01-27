import React, {Component} from 'react';
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "../../ShoppingCart/Cart";
import Basket from "./components/Basket";

class ProductsPage extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            filterProducts: [],
            cartItems: []
        }
        this.changeSortHandler = this.changeSortHandler.bind(this)
        this.changeSizeHandler = this.changeSizeHandler.bind(this)
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.removeFromCartHandler = this.removeFromCartHandler.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:8000/products/')
            .then(response => response.json())
            .then(data => this.setState({
                    products: data,
                    filterProducts: data
                })
            );
        if (localStorage.getItem('cartItems')){
            this.setState({
                cartItems: JSON.parse(localStorage.getItem('cartItems'))
            })
        }
    }

    changeSortHandler = (e) => {
        this.setState({
            sort: e.target.value
        })
        this.listProducts()
    }

    changeSizeHandler = (e) => {
        this.setState({
            size: e.target.value
        })
        this.listProducts()
    }

    listProducts() {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) => {
                    return state.sort === 'lowest' ? a.price - b.price : b.price - a.price
                })
            } else {
                state.products.sort((a, b) => {
                    return a.id - b.id
                })
            }
            if (state.size !== '') {
                return {
                    filterProducts: state.products.filter((a) =>
                        a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
                    )
                }
            }
            return {filterProducts: state.products}
        })
    }

    addToCartHandler = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems
            let productAlreadyInCart = false
            cartItems.forEach((item) => {
                if (item.id === product.id) {
                    productAlreadyInCart = true
                    item.count++
                }
            });
            if (!productAlreadyInCart) {
                cartItems.push({
                    ...product,
                    count: 1
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems
        })
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    removeFromCartHandler = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems.filter(cartItem => cartItem.id !== product.id)
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            this.refreshPage()
            return cartItems
        })
    }

    render() {
        return (
            <div className="mx-3 mx-md-5 mt-5 text-dark">
                <div className='row'>
                    <div className="col-md-8">
                        <Filter
                            size={this.state.size}
                            sort={this.state.sort}
                            handleChangeSize={this.changeSizeHandler}
                            handleChangeSort={this.changeSortHandler}
                            count={this.state.filterProducts.length}
                        />
                        <hr className='my-4'/>
                        <Products
                            products={this.state.filterProducts}
                            handleAddToCart={this.addToCartHandler}
                        />
                    </div>
                    <div className="col-md 3">
                        <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.removeFromCartHandler}/>
                    </div>
                </div>
                <hr className='my-5'/>
            </div>
        );
    }
}

export default ProductsPage;
