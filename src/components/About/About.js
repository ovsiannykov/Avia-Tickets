import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="about-block">
      <Row className="about-row">
        <Col>
          <img
            src="https://cdn.dribbble.com/users/4479253/screenshots/12231271/git_developer_4x.jpg"
            alt="about_image"
            className="about-img"
          />
        </Col>
        <Col>
          <h1 className="about-title">About project</h1>
          <p className="about-text">
            This Pet-Project was developed for educational purposes, as part of
            the training of React and Redux. The project does not pursue
            commercial goals.
          </p>
          <div className="about-author">
            Author:&nbsp;
            <a
              href="https://github.com/ovsiannykov"
              target="blank"
              className="about-link"
            >
              OVSIANNYKOV
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
