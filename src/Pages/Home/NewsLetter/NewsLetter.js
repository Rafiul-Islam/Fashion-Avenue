import React from 'react';

const NewsLetter = () => {
    return (
        <div className='mt-5 '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='text-dark'>NewsLetter</h3>
                        <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et excepturi inventore repellendus tempora tenetur?</p>
                    </div>
                    <div className='col-md-6'>
                        <form className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                <input type="email" className="form-control" id="email"
                                       placeholder="Email Address"/>
                            </div>
                            <button className="btn btn-secondary mb-2" onClick={(e) => e.preventDefault()}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='mt-5'/>
        </div>
    );
};

export default NewsLetter;
