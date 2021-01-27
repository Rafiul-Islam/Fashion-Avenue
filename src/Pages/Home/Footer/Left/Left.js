import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMountain} from "@fortawesome/free-solid-svg-icons";

const Left = () => {
    return (
        <div className='h-50'>
            <div className='h-100 d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon className='fa-5x text-dark' icon={faMountain}/>
            </div>
            <div className="container">
                <hr/>
            </div>
            <p className='h6 font-weight-normal'>1717 Harrison St, Sans Francisco,<br/>CA 94103, USA</p>
        </div>
    );
};

export default Left;
