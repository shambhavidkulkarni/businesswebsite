import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Client Success</h4>
              <h4 className="mt-3">Press Releases</h4>
              <h4 className="mt-3">Partners</h4>
              <h4 className="mt-3">Company Overview</h4>
              <h4 className="mt-3">Investors</h4>
              <h4 className="mt-3">Glossary</h4>
              <h4 className="mt-3">Insights</h4>
              <h4 className="mt-3">Contact Us</h4>
            </div>
            <div className="col">
              <p style={{ color: "gray" }}>Industries</p>
              <p className="mt-3">Banking & Financial Services</p>
              <p className="mt-3">Insurance</p>
              <p className="mt-3">Healthcare</p>
              <p className="mt-3">Life Sciences</p>
              <p className="mt-3">Software & Hi-Tech</p>
              <p className="mt-3">Telecom & Media</p>
              <p className="mt-3">Industrial</p>
            </div>
            {/* column3 */}
            <div className="col">
              <p style={{ color: "gray" }}>Services</p>
              <p className="mt-3">Digital Strategy & Design</p>
              <p className="mt-3">Software Product Engineering</p>
              <p className="mt-3">CX Transformation</p>
              <p className="mt-3">Cloud & Infrastructure</p>
              <p className="mt-3">Intelligent Automation</p>
              <p className="mt-3">Enterprise IT Security</p>
              <p className="mt-3">Data & Analytics</p>
              <p className="mt-3">Enterprise Integration</p>
              <p className="mt-3">Application Development & Management</p>
            </div>
            <div className="col">
              <Card>
                <Card.Body className="square">
                  <Card.Text style={{ fontSize: "20px", fontWeight: "800px" }}>
                    <b>We're hiring! Learn about careers at Persistent</b>
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "20px",
                      fontWeight: "800px",
                      color: "darkorange",
                    }}
                  >
                    <b>Explore Careers</b>
                  </Card.Text>
                </Card.Body>
                <span
                  style={{ color: "darkOrange", border: "3px solid" }}
                ></span>
              </Card>
            </div>
          </div>
          <hr />
        </div>
        <div style={{width:"80%"}} className="mx-auto">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ms-5 me-5">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
