import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

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
                  style={{ width: "17rem" }}
                >
                  <Card>
                    <Card.Body>
                      {/* <Card.Title>Card 1</Card.Title> */}
                      <Card.Text style={{ color: "gray" }}>
                        <b>Quarterly Results</b>
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "800px" }}
                      >
                        <b>
                          Persistent Announces Another Quarter of Consistent
                          Growth with Revenue Up 32.8%
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
                  <Card>
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
                  <Card>
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

      <div className="mb-5" style={{ backgroundColor: "lightgray" }}>
        <div className="">
          <Container>
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
          </Container>
        </div>
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

      <div className="contact-us-form bg-dark">
        <section class="ftco-section">
          <div class="container-box">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5">
                <h2 className="heading-section text-left">Contact Form #07</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="wrapper">
                  <div class="row no-gutters">
                    <div class="col-md-6 d-flex align-items-stretch">
                      <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                        <h3 class="mb-4">Write us</h3>
                        <div id="form-message-warning" class="mb-4"></div>
                        <div id="form-message-success" class="mb-4">
                          Your message was sent, thank you!
                        </div>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          class="contactForm"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="message"
                                  cols="30"
                                  rows="6"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  class="btn btn-primary"
                                />
                                <div class="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-stretch">
                      <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                        <h3>Contact information</h3>
                        <p class="mb-4">
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-map-marker"></span>
                          </div>
                          <div class="text pl-3">
                            <p>
                              <span>Address:</span> 198 West 21th Street, Suite
                              721 New York NY 10016
                            </p>
                          </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-phone"></span>
                          </div>
                          <div class="text pl-3">
                            <p>
                              <span>Phone:</span>{" "}
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-paper-plane"></span>
                          </div>
                          <div class="text pl-3">
                            <p>
                              <span>Email:</span>{" "}
                              <a href="mailto:info@yoursite.com">
                                info@yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-globe"></span>
                          </div>
                          <div class="text pl-3">
                            <p>
                              <span>Website</span> <a href="#">yoursite.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div style={{ backgroundColor: "lightgray"}}>
          <Container>
            <Row>
              <Col className="text-center">
                <h1
                  className="mx-auto"
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
            <div className="mt-4" style={{marginTop:"400px"}}>
              <Row>
                <div className="adjust-margin-img1">
                  <Col
                    md={4}
                    className="cards-in-image m-4 rounded-0"
                    style={{ width: "17rem" }}
                  >
                    <Card>
                      <Card.Body>
                        <Card.Text
                          style={{ fontSize: "20px", fontWeight: "800px" }}
                        >
                          <b>
                            Persistent Announces Another Quarter of Consistent
                            Growth with Revenue Up 32.8%
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
                    <Card>
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
                    <Card>
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
        <div className="div-bg-img" style={{ backgroundColor: "#0b0005"}}>
          <Row>
            <Col className="text-center">
              <h1
                className="mx-auto"
                style={{ fontSize: "80px", fontWeight: "bold" }}
              >
                We are Persistent
              </h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
