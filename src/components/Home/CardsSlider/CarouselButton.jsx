import React, { Fragment } from "react";
import classNames from "classnames/bind";

import styles from "./style.css";

const cx = classNames.bind(styles);

export const CarouselButton = ({
  hasPrevSlide = false,
  hasNextSlide = false,
  onPrevClick,
  onNextClick,
}) => {
  const prevButtonClasses = cx("carousel-button", "carousel-button-prev", {
    "carousel-button_available": hasPrevSlide,
  });

  const nextButtonClasses = cx("carousel-button", "carousel-button-next", {
    "carousel-button_available": hasNextSlide,
  });

  return (
    <Fragment>
      <div className={prevButtonClasses} onClick={onPrevClick}>
        ⬅
      </div>
      <div className={nextButtonClasses} onClick={onNextClick}>
        ➡
      </div>
    </Fragment>
  );
};
