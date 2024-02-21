import React from "react";
import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import productData from "./product";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = "Yahya"; //
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Image />
              <Card.Body>
                <Card.Title>
                  <Name />
                </Card.Title>
                <Card.Text>
                  <Price />
                  <Description />
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="message">
              <p>Hello, {firstName ? firstName : "there"}!</p>
              {firstName && (
                <img
                  src={`https://via.placeholder.com/150?text=${firstName}`}
                  alt="Your avatar"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
