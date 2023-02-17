import {
    useLayoutEffect,
    useState,
    useCallback,
    useRef,
    useEffect,
} from 'react';

export const useCarousel = ({
    initialSlide = 0,
    width = 0,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);

    const carouselRef = useRef(null);
    const slideRefs = useRef(new Map());

    const setPrev = useCallback(() => {
        setIsAnimated(true);
        setCurrentSlide(value => value - 1);
    }, []);

    const setNext = useCallback(() => {
        setIsAnimated(true);
        setCurrentSlide(value => value + 1);
    }, []);

    const handleSlideRef = (slideElement, key) => {
        if (slideElement === null) {
            return;
        }

        slideRefs.current.set(key, slideElement);
    };

    useLayoutEffect(() => {
        const slideElement = slideRefs.current.get(currentSlide);
        const slideWidth = slideElement.getBoundingClientRect().width;
        const slideOffset = slideElement.offsetLeft;

        const carouselElement = carouselRef.current;
        const carouselWidth = carouselElement.getBoundingClientRect().width;

        if (currentSlide === 0) {
            setOffset(0);
        } else if (currentSlide === slideRefs.current.size - 1) {
            setOffset(slideOffset - (carouselWidth - slideWidth));
        } else {
            setOffset(slideOffset - (carouselWidth - slideWidth) / 2);
        }
    }, [currentSlide, width]);

    useEffect(() => {
        setIsAnimated(false);
        setCurrentSlide(initialSlide);
    }, [initialSlide]);

    return [carouselRef, handleSlideRef, currentSlide, offset, isAnimated, setPrev, setNext];
};
