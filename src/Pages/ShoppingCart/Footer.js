import React from 'react';
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";

const Footer = () => {
    const history = useHistory()
    const home = () => {
        history.push('/home')
    }
    const about = () => {
        history.push('/about')
    }
    const shop = () => {
        history.push('/shop')
    }
    const help = () => {
        history.push('/help')
    }
    return (
        <div className='fixed-bottom'>
            <hr className='my-2'/>
            <div className='d-flex justify-content-center mb-2'>
                <div className='border-dark border-right px-3'>
                    <button className='btn btn-outline-secondary border-0' onClick={home}>Home</button>
                </div>
                <div className='border-dark border-right px-3'>
                    <button className='btn btn-outline-secondary border-0' onClick={about}>About</button>
                </div>
                <div className='border-dark border-right px-3'>
                    <button className='btn btn-outline-secondary border-0' onClick={shop}>Shop</button>
                </div>
                <div className='ml-3'>
                    <button className='btn btn-outline-secondary border-0' onClick={help}>Help</button>
                </div>
            </div>
            <div className='text-center mb-2'>
                <FontAwesomeIcon className='mt-2 mr-1' icon={faCopyright}/>
                <span>Fashion Avenue</span>
            </div>
        </div>
    );
};

export default Footer;
