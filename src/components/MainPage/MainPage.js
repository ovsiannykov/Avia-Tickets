import { React, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./MainPage.css";
import TiketsList from "../TiketsList/TiketsList.js";
import {
  actionSortTiket,
  actionChangePrise,
  trasferSort,
} from "../../Redux/store.js";
import { useDispatch, useSelector } from "react-redux";
import { tikets } from "../Tikets/Tikets";

function MainPage() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(actionSortTiket());
  }, [dispatch]);

  return (
    <Container className="main-container">
      <Row>
        <Col sm={5}>
          <div className="form-search-tickets">
            <h2>Search tickets</h2>
            <Row>
              <label className="your-currency">Your Currency:</label>
              <Col>
                <Button
                  size="lg"
                  className="find-btn"
                  variant="outline-primary"
                  onClick={() => {
                    dispatch(actionChangePrise(1, "RUB"));
                  }}
                >
                  RUB
                </Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  className="find-btn"
                  variant="outline-primary"
                  onClick={() => {
                    dispatch(actionChangePrise(3, "UAH"));
                  }}
                >
                  UAH
                </Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  className="find-btn"
                  variant="outline-primary"
                  onClick={() => {
                    dispatch(actionChangePrise(74, "USD"));
                  }}
                >
                  USD
                </Button>
              </Col>
            </Row>
            <Row>
              <label className="your-currency">Transfers:</label>
              <div className="transers-buttons-block">
                <Button
                  className="find-btn transfers-btn"
                  onClick={() => {
                    dispatch(trasferSort(0));
                  }}
                >
                  0
                </Button>
                <Button
                  className="find-btn transfers-btn"
                  onClick={() => {
                    dispatch(trasferSort(1));
                  }}
                >
                  1
                </Button>
                <Button
                  className="find-btn transfers-btn"
                  onClick={() => {
                    dispatch(trasferSort(2));
                  }}
                >
                  2
                </Button>
                <Button
                  className="find-btn transfers-btn"
                  onClick={() => {
                    dispatch(trasferSort(3));
                  }}
                >
                  3
                </Button>
              </div>
            </Row>
          </div>
        </Col>

        <Col sm={7} key={tikets.toString()}>
          {store.tiket.map((el) => {
            return <TiketsList item={el} />;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
