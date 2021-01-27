import React from 'react';

const Card = ({id, url}) => {
    return (
        <div className=''>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={url} alt="HeaderProductCard image cap"/>
                    <div className="card-body">
                        <p className="card-text h2 text-dark">{id}</p>
                    </div>
            </div>
        </div>
    );
};

export default Card;
