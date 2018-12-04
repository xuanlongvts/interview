import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import './style.scss';

import imgIconLeft from './imgs/left-chevron.png';
import imgIconRight from './imgs/right-chevron.png';

import imgAurora from './imgs/aurora.jpg';
import imgCanyon from './imgs/canyon.jpg';
import imgCity from './imgs/city.jpg';
import imgDesert from './imgs/desert.jpg';
import imgMountains from './imgs/mountains.jpg';
import imgRedsky from './imgs/redsky.jpg';
import imgSandyShores from './imgs/sandy-shores.jpg';
import imgTreeOfLife from './imgs/tree-of-life.jpg';

const Slide = ({ image }) => (
    <div
        className="slide"
        style={{
            backgroundImage: `url(${image})`,
        }}
    />
);

const LeftArrow = props => {
    return (
        <div className="backArrow arrow" onClick={props.prevSlide}>
            <img src={imgIconLeft} alt="Left arrow" />
        </div>
    );
};

const RightArrow = props => {
    return (
        <div className="nextArrow arrow" onClick={props.nextSlide}>
            <img src={imgIconRight} alt="Right arrow" />
        </div>
    );
};

class ImgSlider extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            images: [imgAurora, imgCanyon, imgCity, imgDesert, imgMountains, imgRedsky, imgSandyShores, imgTreeOfLife],
            currentIndex: 0,
            translateValue: 0,
        };
    }

    render() {
        const { images } = this.state;

        return (
            <Container>
                <div className="slider">
                    <div
                        id="wrapImg"
                        style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s',
                        }}>
                        {images.length && images.map((item, key) => <Slide key={key} image={item} />)}
                    </div>
                    <LeftArrow />
                    <RightArrow />
                </div>
            </Container>
        );
    }
}

export default ImgSlider;
