import React from 'react';
import {useHistory} from 'react-router-dom';

const HomePageProduct = () => {

    let history = useHistory();

    const redirect = () => {
        history.push('/shop')
    }

    return (
        <div className='mt-5'>
            <div className='container'>
                <div className="d-flex flex-wrap justify-content-center mb-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top rounded" src={`/products/pic1.png`}
                             alt="HeaderProductCard image cap"/>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top rounded" src={`/products/pic2.png`}
                             alt="HeaderProductCard image cap"/>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top rounded" src={`/products/pic3.png`}
                             alt="HeaderProductCard image cap"/>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-secondary mt-5' onClick={redirect}>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageProduct;
