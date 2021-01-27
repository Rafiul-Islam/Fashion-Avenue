import React from 'react';

const HomePageProduct = () => {
    return (
        <div className='mt-5 text-center'>
            <div className='container'>
                <div className="row mb-4">
                    <div className="offset-md-1 col-md-3 my-2">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src='https://placeimg.com/640/480/tech/sepia' alt="HeaderProductCard image cap"/>
                        </div>
                    </div>

                    <div className="col-md-3 my-2 ml-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src='https://placeimg.com/640/480/tech/tech' alt="HeaderProductCard image cap"/>
                        </div>
                    </div>

                    <div className="col-md-3 my-2 ml-3">
                       <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top rounded" src='https://placeimg.com/640/480/tech/nature' alt="HeaderProductCard image cap"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-secondary mt-5'>Shop Now</button>
        </div>
    );
};

export default HomePageProduct;
