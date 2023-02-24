import "./slider.css";
import React from "react";
import Carousel from "react-multi-carousel";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import "react-multi-carousel/lib/styles.css";

export const SliderComp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
        <div className="cardSlider">
          <Card className="w-50">
            <img src="logo192.png" className="" style={{height:"70px",width:"100px"}} alt="img"/>
          </Card>
        </div>
      </Carousel>
    </>
  );
};
