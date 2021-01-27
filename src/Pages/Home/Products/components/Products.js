import React, {Component} from 'react';

class Products extends Component {
    render() {
        const {products, handleAddToCart} = this.props

        const productItems = products.map((product, index) => (
            <div className='col-md-4 my-1' key={index}>
                <div className='img-thumbnail text-center rounded'>
                    <a href={`#${product.id}`} onClick={(e) => handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>{product.title}</p>
                    </a>
                    <div>
                        <strong>${product.price}</strong><br/>
                        <button className='btn btn-secondary mb-2 mt-1' onClick={(e) => handleAddToCart(e, product)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className='row'>
                {productItems}
            </div>
        );
    }
}

export default Products;
