import React from "react";
import Logo from "./logo.png";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Modal,
  Form,
} from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useState } from "react";
import MainPage from "../MainPage/MainPage";
import About from "../About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Router>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
          className="header"
        >
          <Container className="header-container">
            <NavbarBrand href="/">
              <img
                src={Logo}
                height="60"
                width="80"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
              </Nav>
              <Button
                className="header-btn btn-mobile-none"
                onClick={handleShow}
              >
                CALL ME
              </Button>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">Request a call</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form name="modal-form">
            <Form.Group className="mb-3">
              <Form.Label className="special-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                required
                minlength="2"
                maxlength="15"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <PhoneInput
                required
                country={"ua"}
                placeholder="Phone"
                id="modal-phone-input"
              />
            </Form.Group>
            <Button id="send-btn" variant="primary" type="submit">
              SEND
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
