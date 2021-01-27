import React from 'react';

const Card = ({id, url}) => {
    return (
        <div className=''>
            <div className="card rounded overflow-hidden" style={{width: '18rem'}}>
                <img className="card-img-top" src={url} alt="HeaderProductCard image cap"/>
            </div>
        </div>
    );
};

export default Card;
