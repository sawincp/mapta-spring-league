import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import styles from "./MatchCard.module.css";

export default function MatchCard() {
  return (
    <div className={styles.matchcard}>
      <h1>Matches</h1>
      <Card>
        <Card.Body>
          <Card.Title>Freddorators vs. Grovesters</Card.Title>
          <Card.Text>
            <Row>
              <Col md={3}>Corey Sawin</Col>
              <Col md={3}>31.0</Col>
              <Col xs={3}>6</Col>
              <Col xs={3}>3</Col>
              <Col xs={3}>6</Col>
            </Row>
            <Row>
              <Col xs={8}>Megan Smith 30.5</Col>
              <Col xs={3}>33.2</Col>
            </Row>
            <Row>
              <Col xs={8}>Tommy Smith</Col>
             
            </Row>
            <Row>
              <Col xs={6}>Katie Smith 37.3</Col>
        
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

