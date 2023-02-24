import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ContactUs } from "./ContactUs";
import { SliderComp } from "./SliderComp";

export const Home = () => {
  return (
    <>
      <div className="image-with-text">
        <Container>
          <Row>
            <Col className="text-center">
              <h1
                className="image-text"
                style={{ fontSize: "80px", fontWeight: "bold" }}
              >
                We are Persistent
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <h1 className="" style={{ fontSize: "20px", color: "white" }}>
                <b>
                  A trusted Digital Engineering and Enterprise Modernization
                  partner.
                </b>
              </h1>
            </Col>
          </Row>
          <div className="mt-4">
            <Row>
              <div className="adjust-margin-img1">
                <Col
                  md={4}
                  className="cards-in-image m-4 rounded-0"
                  style={{ width: "17rem", borderRadius: "0px" }}
                >
                  <Card
                    className="h-100 border-0"
                    style={{ borderRadius: "0px" }}
                  >
                    <Card.Body className="">
                      <Card.Text style={{ color: "gray" }}>
                        <b>Quarterly Results</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "800px" }}
                      >
                        <b>
                          Persistent Announces Another Quarter of Consistent
                          Growth
                        </b>
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="cards-in-image m-4 rounded-0"
                  style={{ width: "17rem" }}
                >
                  <Card
                    className="h-100 border-0"
                    style={{ borderRadius: "0px" }}
                  >
                    <Card.Body>
                      <Card.Text style={{ color: "gray" }}>
                        <b>Press Release</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "800px" }}
                      >
                        <b>
                          Persistent Partners with Microsoft to Accelerate Its
                          Growth
                        </b>
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="cards-in-image border-0 m-4"
                  style={{ width: "17rem" }}
                >
                  <Card
                    className="h-100 border-0"
                    style={{ borderRadius: "0px" }}
                  >
                    <Card.Body>
                      <Card.Text style={{ color: "gray" }}>
                        <b>News</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "800px" }}
                      >
                        <b>
                          BQ Prime Interview: Outlook for 2023 with Sandeep
                          Kalra
                        </b>
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>

      <div className="apply-now-bg text-bg-info p-4 text-light">
        Join our fast growing global team to unleash your full potential.
        <div className="apply-now-bg-btn">
          <button type="button" className="btn btn-lg btn-danger ms-5">
            Apply now
          </button>
        </div>
      </div>

      <div className="m-5">
        <Row>
          <Col className="text-center">
            <h1 className="" style={{ fontSize: "50px", fontWeight: "bold" }}>
              Our mission: complete client success
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p
              className="w-75 mx-auto"
              style={{ fontSize: "20px", color: "gray" }}
            >
              When it comes to digital transformation, why settle for a vendor
              when what you need is a partner? Someone who understands your
              industry and your company and how to execute your strategy
              efficiently and completely. Someone you can count on to deliver
              essential solutions and measurable results again and again.
              Persistent is that partner.
            </p>
          </Col>
        </Row>
        <div className="ms-5 me-5 mb-5 mt-5 mx-auto">
          <SliderComp />
        </div>
      </div>

      <div className="" style={{ backgroundColor: "lightgray" }}>
        <div className="">
          {/* <Container> */}
          <Row>
            <Col className="text-center">
              <h1
                className="image-text mt-4"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Our industry expertise and solutions
              </h1>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Row>
            <Col className="text-center">
              <h1
                className="image-text"
                style={{
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Creating business value at the intersection of your industry
                transformation and today's latest technology innovation.
              </h1>
            </Col>
          </Row>
        </div>
        {/* </Container> */}

        <div className="mb-5" style={{ backgroundColor: "lightgray" }}>
          <div className="services-card">
            <div className=" ms-5 me-5 mt-5">
              <CardGroup style={{ width: "60rem", height: "245px" }}>
                <Card>
                  <Card.Img
                    className="rounded-0"
                    variant="top"
                    src="darkgreen.png"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="rounded-0"
                    variant="top"
                    src="lightgreen.png"
                  />
                </Card>
              </CardGroup>
            </div>
          </div>
          <div className="services-card">
            <div className="ms-5 me-5">
              <CardGroup style={{ width: "60rem", height: "245px" }}>
                <Card>
                  <Card.Img
                    className="rounded-0"
                    variant="top"
                    src="darkblue.png"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="rounded-0"
                    variant="top"
                    src="lightblue.png"
                  />
                </Card>
              </CardGroup>
            </div>
          </div>
          <div className="services-card">
            <div className="ms-5 me-5">
              <CardGroup style={{ width: "60rem", height: "245px" }}>
                <Card>
                  <Card.Img variant="top" src="yellow.png" />
                </Card>
                <Card>
                  <Card.Img variant="top" src="pink.png" />
                </Card>
                <Card>
                  <Card.Img variant="top" src="green.png" />
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="ms-5 me-5">
          <Row>
            <Col className="text-center">
              <h1
                className="image-text"
                style={{ fontSize: "80px", fontWeight: "bold" }}
              >
                Our services
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <h1 className="" style={{ fontSize: "20px", color: "white" }}>
                Delivering domain expertise and technology-driven offerings to
                help you turn digital challenges into opportunities.
              </h1>
            </Col>
          </Row>
          <div className="services-section">
            <div className="row mt-4 mx-auto" style={{ width: "1200px" }}>
              <div className="col m-1">
                <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                  <Card.Body>
                    {/* <Card.Title>Light Card Title</Card.Title> */}
                    <Card.Img variant="top" src="serviceone.png" />
                  </Card.Body>
                </Card>
              </div>
              <div className="col m-1">
                <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                  <Card.Body>
                    <Card.Img variant="top" src="servicetwo.png" />
                  </Card.Body>
                </Card>
              </div>
              <div className="col m-1">
                <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                  <Card.Body>
                    <Card.Img variant="top" src="servicethree.png" />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div class="row mt-3 mx-auto" style={{ width: "1200px" }}>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="servicefour.png" />
                </Card.Body>
              </Card>
            </div>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="servicefive.png" />
                </Card.Body>
              </Card>
            </div>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="servicesix.png" />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="row mt-3 mx-auto" style={{ width: "1200px" }}>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="serviceseven.png" />
                </Card.Body>
              </Card>
            </div>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="serviceeight.png" />
                </Card.Body>
              </Card>
            </div>
            <div className="col m-1">
              <Card border="dark" style={{ width: "20rem", height: "150px" }}>
                <Card.Body>
                  <Card.Img variant="top" src="servicenine.png" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "lightgray" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1
                className="mx-auto"
                style={{ fontSize: "80px", fontWeight: "bold" }}
              >
                Why Persistent?
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <h1 className="" style={{ fontSize: "20px", color: "white" }}>
                <b>
                  A trusted Digital Engineering and Enterprise Modernization
                  partner.
                </b>
              </h1>
            </Col>
          </Row>
          <div className="mt-4">
            <Row>
              <div className="adjust-margin-img1">
                <Col md={4} style={{ width: "17rem" }}>
                  <p style={{ fontSize: "20px" }}>
                    30+ years of leadership in software engineering and digital
                    transformation.
                  </p>
                </Col>
                <Col md={4} className="m-4" style={{ width: "17rem" }}>
                  <p style={{ fontSize: "20px" }}>
                    Highest customer experience scores of any company in IT
                    industry, rated by ISG.
                  </p>
                </Col>
                <Col md={4} className="m-4" style={{ width: "17rem" }}>
                  <p style={{ fontSize: "20px" }}>
                    Boutique mindset focused on enterprise clients moving their
                    digital presence to cloud.
                  </p>
                </Col>
                <Col md={4} className="m-4" style={{ width: "17rem" }}>
                  <p style={{ fontSize: "20px" }}>
                    Diverse, open and innovative business partner ecosystem for
                    maximum adaptability.
                  </p>
                </Col>
              </div>
            </Row>
          </div>
          <div className="" style={{ paddingTop: "" }}>
            <Row>
              <div className="adjust-margin-img1">
                <Col
                  md={4}
                  className="cards-in-image m-4 rounded-0"
                  style={{ width: "17rem" }}
                >
                  <Card className="bg-dark" style={{ color: "white" }}>
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "50px", fontWeight: "800px" }}
                      >
                        <b>$978.8M</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "18px", fontWeight: "800px" }}
                      >
                        Rolling 4 Quarters Revenue
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="m-4 rounded-0"
                  style={{ width: "17rem" }}
                >
                  <Card className="bg-dark" style={{ color: "white" }}>
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "50px", fontWeight: "800px" }}
                      >
                        <b>350+</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "18px", fontWeight: "800px" }}
                      >
                        Services clients annually
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="m-4 rounded-0"
                  style={{ width: "17rem" }}
                >
                  <Card className="bg-dark" style={{ color: "white" }}>
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "50px", fontWeight: "800px" }}
                      >
                        <b>22,500+</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "18px", fontWeight: "800px" }}
                      >
                        Industry & tech experts
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="cards-in-image border-0 m-4"
                  style={{ width: "17rem" }}
                >
                  <Card className="bg-dark" style={{ color: "white" }}>
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "50px", fontWeight: "800px" }}
                      >
                        <b>18</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "18px", fontWeight: "800px" }}
                      >
                        Countries
                      </Card.Text>
                    </Card.Body>
                    <span
                      style={{ color: "darkOrange", border: "3px solid" }}
                    ></span>
                  </Card>
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>

      <div
        className="div-bg-img bg-image"
        style={{ backgroundImage: "url(/home-brand-video.jpg)" }}
      >
        <Row>
          <Col className="text-center">
            <h1
              className="mx-auto mt-5"
              style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              See beyond, Rise above
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button
              type="button"
              class="btn btn-sm mt-5"
              style={{
                width: "400px",
                height: "40px",
                backgroundColor: "darkorange",
                borderRadius: "30px",
                color: "white",
              }}
            >
              <b>Watch our brand video to learn more</b>
            </button>
          </Col>
        </Row>
      </div>

      <ContactUs />
    </>
  );
};
