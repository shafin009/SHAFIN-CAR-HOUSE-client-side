import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from './Banner1.jpg'
import Banner2 from './Banner2.jpg'
import Banner3 from './Banner3.jpg'


const Banner = () => {
    return (
        <div>
            <br />
            <div className="d-block">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>SHAFIN CAR HOUSE</h3>
                            <p>When it comes to car maintenance, you need to be prepared for any situation. Luckily, we stock the tools for all your maintenance needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>SHAFIN CAR HOUSE</h3>
                            <p>When it comes to car maintenance, you need to be prepared for any situation. Luckily, we stock the tools for all your maintenance needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>SHAFIN CAR HOUSE</h3>
                            <p>When it comes to car maintenance, you need to be prepared for any situation. Luckily, we stock the tools for all your maintenance needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
        </div >
    );
};

export default Banner;