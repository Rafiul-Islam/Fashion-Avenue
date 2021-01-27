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
                <Card id="1" url='https://placeimg.com/640/480/animals'/>
                <Card id="2" url='https://placeimg.com/640/480/any'/>
                <Card id="3" url='https://placeimg.com/640/480/arch'/>
                <Card id="4" url='https://placeimg.com/640/480/nature'/>
                <Card id="5" url='https://placeimg.com/640/480/people'/>
                <Card id="6" url='https://placeimg.com/640/480/tech'/>
                <Card id="7" url='https://placeimg.com/640/480/grayscale'/>
                <Card id="8" url='https://placeimg.com/640/480/sepia'/>
            </Carousel>
        </div>
    );
};

export default Slider;
