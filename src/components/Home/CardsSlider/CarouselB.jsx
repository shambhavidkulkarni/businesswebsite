import React, { forwardRef } from 'react';
import * as PropTypes from 'prop-types';
import { isNil, isNumber } from 'lodash/fp';
import classNames from 'classnames/bind';

import { useCarousel } from './UseCarousel';
import { CarouselSlide } from './CarouselSlide';
import { CarouselButton } from './CarouselButton';
import styles from './style.css';

const cx = classNames.bind(styles);

const CarouselView = forwardRef(
    (
        {
            isAnimated = false,
            gutter,
            width,
            currentSlide,
            offset,
            slideRef,
            children,
            onPrevClick,
            onNextClick,
        },
        ref
    ) => {
        const slidesCount = React.Children.count(children);
        const isFirstSlide = currentSlide === 0;
        const isLastSlide = currentSlide === slidesCount - 1;

        const classes = cx('carousel', {
            [`carousel_gutter_${gutter}`]: !isNil('gutter'),
            'carousel_first-slide': isFirstSlide,
            'carousel_last-slide': isLastSlide,
            carousel_animated: isAnimated,
        });

        const style = {
            width: isNumber(width) ? `${width}px` : 'unset',
        };

        const innerStyle = {
            transform: `translateX(-${offset}px)`,
        };

        return (
            <div className={classes} ref={ref} style={style}>
                <div className={styles['carousel-outer']}>
                    <div className={styles['carousel-inner']} style={innerStyle}>
                        {React.Children.map(children, (child, i) => (
                            <CarouselSlide key={child.key} ref={element => slideRef(element, i)}>
                                {child}
                            </CarouselSlide>
                        ))}
                    </div>
                </div>

                <CarouselButton
                    hasPrevSlide={!isFirstSlide}
                    hasNextSlide={!isLastSlide}
                    onPrevClick={onPrevClick}
                    onNextClick={onNextClick}
                />
            </div>
        );
    }
);

export const CarouselB = ({ children, initialSlide, width, ...props }) => {
    const [
        handleRef,
        handleSlideRef,
        currentSlide,
        offset,
        isAnimated,
        setPrev,
        setNext,
    ] = useCarousel({
        initialSlide,
        width,
    });

    return (
        <CarouselView
            currentSlide={currentSlide}
            offset={offset}
            isAnimated={isAnimated}
            ref={handleRef}
            slideRef={handleSlideRef}
            onPrevClick={setPrev}
            onNextClick={setNext}
            width={width}
            {...props}
        >
            {children}
        </CarouselView>
    );
};

CarouselB.propTypes = {
    /**
     * Номер слайда, выбранного при загрузке
     */
    initialSlide: PropTypes.number,

    /**
     * Ширина карусели
     * Если не задана, будет использована вся ширина контейнера
     */
    width: PropTypes.number,
};
