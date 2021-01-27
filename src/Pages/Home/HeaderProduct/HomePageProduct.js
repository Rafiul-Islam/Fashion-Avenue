import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePageProduct = () => {

    let history = useHistory();

    const redirect = () => {
        history.push('/shop')
    }

    return (
        <div className='mt-5 text-center'>
            <div className='container'>
                <div className="row mb-4">
                    <div className="offset-md-1 col-md-3 my-2">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src={`/products/pic1.png`}
                                 alt="HeaderProductCard image cap"/>
                        </div>
                    </div>

                    <div className="col-md-3 my-2 ml-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src={`/products/pic2.png`}
                                 alt="HeaderProductCard image cap"/>
                        </div>
                    </div>

                    <div className="col-md-3 my-2 ml-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src={`/products/pic3.png`}
                                 alt="HeaderProductCard image cap"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-secondary mt-5' onClick={redirect}>Shop Now</button>
        </div>
    );
};

export default HomePageProduct;
