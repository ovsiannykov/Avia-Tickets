/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import "./TiketList.css";
import PhoneInput from "react-phone-input-2";

function TicketsList({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ticket">
      <Row className="ticket-card">
        <Col sm={3} className="hz">
          <img
            src="https://cdn.turkishairlines.com/m/397dae0cba906e9/original/CIFT-SATIR-DIKEY-TIRE-png.png"
            height="120"
            width="120"
            className="company-logo"
          />
          <div className="transfer">{item.stops} transfer</div>
          <div className="prise-btn-container">
            <Button className="prise-btn" onClick={handleShow}>
              Buy {item.price} {item.priseName ? item.priseName : "RUB"}
            </Button>
          </div>
        </Col>

        <Col sm={9}>
          <Row>
            <Col sm={6} className="departure-info">
              <div className="departure-time time">{item.departure_time}</div>
              <div className="departure-point point">{item.origin_name}</div>
              <div className="departure-date date">{item.departure_date}</div>
            </Col>
            <Col sm={6} className="arrival-info">
              <div className="arrival-time time">{item.arrival_time}</div>
              <div className="arrival-point point">{item.destination_name}</div>
              <div className="arrival-date date">{item.arrival_date}</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Buy Ticket: &nbsp;{item.origin_name}&nbsp; &mdash;&nbsp;{" "}
            {item.destination_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h5>
            {item.origin_name}&nbsp; &mdash;&nbsp; {item.destination_name}
            <br />
            <span className="tike-tlist--modal--date">
              {item.departure_date}
            </span>
          </h5> */}

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="special-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                required
                minlength="2"
                maxlength="15"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <PhoneInput required country={"ua"} placeholder="Phone" />
            </Form.Group>
            <Button
              id="send-btn"
              variant="primary"
              type="submit"
              className="header-btn"
            >
              BUY {item.price} {item.priseName ? item.priseName : "RUB"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TicketsList;
