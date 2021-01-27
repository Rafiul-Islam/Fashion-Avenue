import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faCartPlus, faMountain} from '@fortawesome/free-solid-svg-icons'
import './Style/style.css'


class Navigations extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
                <a className="navbar-brand ml-5" href="#">
                    <FontAwesomeIcon className='fa-2x text-dark' icon={faMountain}/>
                </a>
                <div className="input-group ml-3" id='navbar-search'>
                    <div className="input-group-prepend">
                        <FontAwesomeIcon className='mt-2' icon={faSearch}/>
                    </div>
                    <input type="text" className="form-control-sm rounded ml-1" placeholder="Search"
                           aria-label="Search"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item mr-5 border-right border-secondary">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item mr-5 border-right border-secondary">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item mr-5 border-right border-secondary">
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item mr-5 border-right border-secondary">
                            <NavLink className="nav-link" to="/help">Help</NavLink>
                        </li>
                        <li className="nav-item mr-5">
                            <NavLink exact className="nav-link d-flex bg-secondary px-3 rounded text-white" to="/cart">
                                <FontAwesomeIcon className='mt-1' icon={faCartPlus}/>
                                <div className='ml-2'>Cart</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigations;
