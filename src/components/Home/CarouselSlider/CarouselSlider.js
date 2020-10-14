// import { Carousel } from 'bootstrap';
// import { Carousel } from 'bootstrap';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel from '../../../images/carousel-5.png';
import carouse2 from '../../../images/carousel-3.png';
import carouse3 from '../../../images/carousel-4.png';

const CarouselSlider = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousel}
                height='500px'
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouse2}
                height='500px'
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouse3}
                height='500px'
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselSlider;