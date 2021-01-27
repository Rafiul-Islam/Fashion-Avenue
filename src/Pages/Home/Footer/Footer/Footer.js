import React from 'react';
import Left from "../Left/Left";
import Right from "../Right/Right";

const Footer = () => {
    return (
        <div className='mb-1'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Left/>
                    </div>
                    <div className="col-md-9">
                        <Right/>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>
        </div>
    );
};

export default Footer;
