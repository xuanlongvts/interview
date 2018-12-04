import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import imgIconLeft from './imgs/left-chevron.png';
import imgIconRight from './imgs/right-chevron.png';

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

const PagingBottom = ({ length, currentIndex, handleClickPaging }) => {
    var ListCycle = [];
    for (var i = 0; i < length; i++) {
        ListCycle.push(
            <span key={i} className={currentIndex === i ? 'active' : null} onClick={handleClickPaging(i)}>
                {i}
            </span>,
        );
    }

    return <div className="paging">{ListCycle}</div>;
};

class Carousel extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            translateValue: 0,
            dataLength: 0,
        };
    }

    componentDidMount() {
        const { data, autoplay } = this.props;

        Number.isInteger(autoplay) && this.autoplaySlider(autoplay);

        data.length &&
            this.setState({
                dataLength: data.length,
            });
    }

    autoplaySlider(number) {
        this.interval = setInterval(() => this.nextSlide(), number);
    }

    resetInterval() {
        const { autoplay } = this.props;

        if (Number.isInteger(autoplay)) {
            clearInterval(this.interval);
            this.autoplaySlider(autoplay);
        }
    }

    prevSlide = () => {
        const { currentIndex, dataLength } = this.state;
        const { infinite } = this.props;

        this.resetInterval();

        if (currentIndex === 0 && infinite) {
            return this.setState({
                currentIndex: dataLength - 1,
                translateValue: -this.slideWidth() * (dataLength - 1),
            });
        }

        currentIndex !== 0 &&
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + this.slideWidth(),
            }));
    };

    nextSlide = () => {
        const { currentIndex, dataLength } = this.state;
        const { infinite } = this.props;

        this.resetInterval();

        if (currentIndex === dataLength - 1 && infinite) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0,
            });
        }

        currentIndex < dataLength - 1 &&
            this.setState(prevState => {
                return {
                    currentIndex: prevState.currentIndex + 1,
                    translateValue: prevState.translateValue - this.slideWidth(),
                };
            });
    };

    handleClickPaging = key => () => {
        this.resetInterval();

        return this.setState({
            currentIndex: key,
            translateValue: -this.slideWidth() * key,
        });
    };

    slideWidth = () => document.querySelector('.slide').clientWidth;

    render() {
        const { translateValue, dataLength, currentIndex } = this.state;
        const { data } = this.props;

        return (
            <div className="slider">
                <div
                    id="wrapImg"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.5s',
                    }}>
                    {data.length && data.map((item, key) => <Slide key={key} image={item} />)}
                </div>
                <LeftArrow prevSlide={this.prevSlide} />
                <RightArrow nextSlide={this.nextSlide} />

                <PagingBottom length={dataLength} currentIndex={currentIndex} handleClickPaging={this.handleClickPaging} />
            </div>
        );
    }
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
    infinite: PropTypes.bool,
    autoplay: PropTypes.number,
};

export default Carousel;
