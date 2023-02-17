import React from 'react';
import styles from './style.css';

export const CarouselSlide = React.forwardRef((props, ref) => (
    <div {...props} ref={ref} className={styles['carousel-slide']} />
));
