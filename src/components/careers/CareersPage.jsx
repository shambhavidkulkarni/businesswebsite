import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { UploadResume } from "./UploadResume";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
export const CareersPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/black-bg.png)",
          height: "700px",
          width: "1518px",
        }}
      >
        Hello
      </div>

      <div className="job-section" style={{ backgroundColor: "#4F4F54" }}>
        {/* <div className="w-75 mx-auto"> */}
        <Row>
          <Col>
            <h1
              className="mx-auto mt-5  w-75"
              style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Start your career at Persistent today and let's unleash your full
              potential.
            </h1>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={4}>
              <Button
                type="button"
                className="mt-5 btn btn-secondary w-25"
                style={{ borderRadius: "25px" }}
              >
                Clear All
              </Button>
              <Row className="mt-5">
                <Col sm={10} className="w-75">
                  {" "}
                  <input
                    type="text"
                    className="about-border search-for-job border border-top-0 border-left-0 border-right-0"
                    placeholder="Search.."
                    style={{ backgroundColor: "#4F4F54" }}
                  />
                </Col>
              </Row>
              <Row className="mt-3 w-75">
                <Col className="">
                  {" "}
                  <input
                    type="text"
                    className="search-for-job"
                    placeholder="Search.."
                    style={{ backgroundColor: "#4F4F54" }}
                  />
                </Col>
                <Col className="">to</Col>
                <Col className="">
                  {" "}
                  <input
                    type="text"
                    className="search-for-job"
                    placeholder="Search.."
                    style={{ backgroundColor: "#4F4F54" }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={10} className="w-75">
                  {" "}
                  <input
                    type="text"
                    className="about-border search-for-job border-bottom"
                    placeholder="Search.."
                    style={{ backgroundColor: "#4F4F54" }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={10} className="w-75">
                  <form>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> I have a bike</label>
                    <br />
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <label for="vehicle2"> I have a car</label>
                    <br />
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                    <label for="vehicle3"> I have a boat</label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                  </form>
                </Col>
              </Row>
            </Col>
            <Col sm={8}>
              <Row className="mt-5">
                <Col sm={10}>
                  {" "}
                  <input
                    type="text"
                    className="search-for-job"
                    placeholder="Search.."
                  />
                </Col>
                <Col sm={2}>
                  {" "}
                  <Button className="btn btn-dark w-75 h-80 text-light">
                    Reset
                  </Button>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  {" "}
                  <p>55 openings found</p>
                </Col>
              </Row>
              <div className="mt-4">
                <Row>
                  <div className="adjust-margin-img1">
                    <Col md={4} className="m-4 rounded-0">
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      className="m-4 rounded-0"
                      style={{ width: "17rem", borderRadius: "0px" }}
                    >
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      className="m-4 rounded-0"
                      style={{ width: "17rem", borderRadius: "0px" }}
                    >
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="adjust-margin-img1">
                    <Col md={4} className="m-4 rounded-0">
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      className="m-4 rounded-0"
                      style={{ width: "17rem", borderRadius: "0px" }}
                    >
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      className="m-4 rounded-0"
                      style={{ width: "17rem", borderRadius: "0px" }}
                    >
                      <Card
                        className="border-0"
                        style={{
                          height: "200px",
                          width: "250px",
                          borderRadius: "0px",
                          backgroundColor: "#424242",
                        }}
                      >
                        <Card.Body>
                          <Card.Text className="text-light">
                            <b>Quarterly Results</b>
                          </Card.Text>
                          <Card.Text className="text-light">
                            <b>
                              Persistent Announces Another Quarter of Consistent
                              Growth
                            </b>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {/* </div> */}
      </div>

      <div className="bg-warning">
        <Row>
          <Col className="text-center">
            <h1
              className="mx-auto mt-5 text-dark"
              style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Can't find what you're looking for?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mx-auto mt-5 text-dark" style={{ fontSize: "20px" }}>
              Upload your resume and we'll match you with relevant opportunities
              at Persistent.
            </p>
          </Col>
        </Row>
        <UploadResume />
      </div>

      <div className="life-at-company" style={{ backgroundColor: "#4F4F54" }}>
        <Row className="">
          <Col className="mt-5">
            <h1
              className="mx-auto w-75"
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Life at Persistent
            </h1>
          </Col>
        </Row>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
          <MDBCol className="mt-5 mb-5">
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company1-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Cutting Edge Tech Work
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Positively impact lives through meaningful work across
                  industries
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company2-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Work Hard, Play Hard
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Environment that values hard work and believes in having fun
                  along the way
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company3-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Diversity & Inclusion
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Positively impact lives through meaningful work across
                  industries
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company4-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Cutting Edge Tech Work
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Positively impact lives through meaningful work across
                  industries
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company5-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Cutting Edge Tech Work
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Positively impact lives through meaningful work across
                  industries
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="life-at-company6-removebg-preview.png"
                alt="..."
                position="top"
                className="h-25 w-25"
              />
              <MDBCardBody>
                <MDBCardTitle className="text-warning fs-3">
                  Cutting Edge Tech Work
                </MDBCardTitle>
                <MDBCardText className="text-light fs-5">
                  Positively impact lives through meaningful work across
                  industries
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <div style={{ backgroundColor: "#313535" }}>
        <Row className="">
          <Col className="mt-5">
            <h1
              className="mx-auto w-75"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "10px",
              }}
            >
              At Persistent, you’ll have the opportunity to work with industry
              leading organizations across 19 countries including:
            </h1>
          </Col>
        </Row>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="at-company1.png"
                alt="..."
                position="top"
                className="w-100"
              />
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="at-company2.png"
                alt="..."
                position="top"
                className="border-0"
              />
            </MDBCard>
          </MDBCol>
          <MDBCol className="mt-5 mb-5">
            <MDBCard
              style={{ backgroundColor: "#4F4F54" }}
              className="border-0"
            >
              <MDBCardImage
                src="at-company3.png"
                alt="..."
                position="top"
                className="border-0"
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <div style={{ backgroundColor: "#4F4F54" }}>
        <Row>
          <Col>
            <h1
              className="mx-auto mt-5 text-dark w-75"
              style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Corporate Values
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              className="mx-auto mt-5 text-dark w-75"
              style={{ fontSize: "20px" }}
            >
              Our company fosters a values-driven and people centric work
              environment. We're dedicated to building an inclusive culture that
              reflects what’s important to our employees and is based on what
              they value.
            </p>
          </Col>
        </Row>
        <MDBRow className="row-cols-md-2 w-75 mx-auto">
          <MDBCol>
            <MDBCard className="">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="bg-warning">
        <Row>
          <Col className="text-center">
            <h1
              className="mx-auto mt-5 text-dark"
              style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}
            >
              Join Us{" "}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p
              className="mx-auto mt-3 text-dark mb-3"
              style={{ fontSize: "30px" }}
            >
              Where great ideas rise to the challenge.
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mb-5">
            <Button className="btn btn-dark " style={{ borderRadius: "30px" }}>
              View Available Positions
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
