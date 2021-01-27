import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import Card from "./Card";

const Slider = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false},
        {width: 850, itemsToShow: 3},
        {width: 1150, itemsToShow: 4, itemsToScroll: 2},
        {width: 1450, itemsToShow: 5},
        {width: 1750, itemsToShow: 6},
    ]

    const imgDetails = [
        {id: 1, url: "https://placeimg.com/640/480/any"},
        {id: 2, url: "https://placeimg.com/640/480/any"},
        {id: 3, url: "https://placeimg.com/640/480/any"},
        {id: 4, url: "https://placeimg.com/640/480/any"},
        {id: 5, url: "https://placeimg.com/640/480/any"},
        {id: 6, url: "https://placeimg.com/640/480/any"},
    ]
    const [imageDetails, setImageDetails] = useState(imgDetails)

    return (
        <div className='my-4 container'>
            <Carousel breakPoints={breakPoints}>
                <Card id="1" url={`/products/18644119330491310_1.jpg`}/>
                <Card id="2" url={`/products/18532669286405344_1.jpg`}/>
                <Card id="3" url={`/products/11854078013954528_1.jpg`}/>
                <Card id="4" url={`/products/10547961582846888_1.jpg`}/>
                <Card id="5" url={`/products/9197907543445676_1.jpg`}/>
                <Card id="6" url={`/products/6090484789343891_1.jpg`}/>
                <Card id="7" url={`/products/5619496040738316_1.jpg`}/>
                <Card id="8" url={`/products/876661122392077_1.jpg`}/>
            </Carousel>
        </div>
    );
};

export default Slider;
