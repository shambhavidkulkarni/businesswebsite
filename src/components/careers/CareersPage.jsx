import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { UploadResume } from "./UploadResume";
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
            <p
              className="mx-auto mt-5 text-dark"
              style={{ fontSize: "20px"}}
            >
              Upload your resume and we'll match you with relevant opportunities
              at Persistent.
            </p>
          </Col>
        </Row>
        <UploadResume />
      </div>
    </>
  );
};
