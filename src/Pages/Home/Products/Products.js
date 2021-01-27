import React from 'react';

const Products = () => {
    return (
        <div className='my-5 '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='bg-secondary'>
                            <div className="card bg-dark text-white text-center">
                                <div className="card-body">
                                    <i className="fas fa-box fa-3x"></i>
                                    <h3>Sample Heading</h3>
                                    <p className='text-left'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur
                                        consequatur deleniti distinctio, dolores eveniet fugiat iure magni nemo
                                        praesentium quam quod voluptatibus. Aliquam architecto beatae culpa cumque
                                        cupiditate debitis eveniet excepturi fugit id illum, inventore ipsum laboriosam
                                        libero magni maiores modi nesciunt perferendis perspiciatis quos, reprehenderit
                                        sequi totam, vitae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div id="about-page-content-3">
                            <div className="">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="card bg-danger text-white text-center">
                                            <div className="card-body">
                                                <i className="fas fa-building fa-3x"></i>
                                                <h3>Sample Heading</h3>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                                                adipisci.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card bg-dark text-white text-center">
                                            <div className="card-body">
                                                <i className="fas fa-bullhorn fa-3x"></i>
                                                <h3>Sample Heading</h3>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                                                adipisci.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="card bg-dark text-white text-center">
                                            <div className="card-body">
                                                <i className="fas fa-box fa-3x"></i>
                                                <h3>Sample Heading</h3>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                                                adipisci.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card bg-danger text-white text-center">
                                            <div className="card-body">
                                                <i className="fas fa-credit-card fa-3x"></i>
                                                <h3>Sample Heading</h3>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                                                adipisci.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-5'/>
        </div>
    );
};

export default Products;
