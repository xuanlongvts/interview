import React, { PureComponent } from 'react';

import { Container } from 'reactstrap';

import Carousel from './imgSlider/index';
import imgAurora from '../../images/slider/aurora.jpg';
import imgCanyon from '../../images/slider/canyon.jpg';
import imgCity from '../../images/slider/city.jpg';
import imgDesert from '../../images/slider/desert.jpg';
import imgMountains from '../../images/slider/mountains.jpg';
import imgRedsky from '../../images/slider/redsky.jpg';
import imgSandyShores from '../../images/slider/sandy-shores.jpg';
import imgTreeOfLife from '../../images/slider/tree-of-life.jpg';

class ImgSlider extends PureComponent {
    render() {
        const images = [imgAurora, imgCanyon, imgCity, imgDesert, imgMountains, imgRedsky, imgSandyShores, imgTreeOfLife];

        return (
            <Container>
                <Carousel data={images} infinite={true} autoplay={3000} />
            </Container>
        );
    }
}

export default ImgSlider;
