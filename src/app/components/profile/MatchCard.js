import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/match-card.module.css";

export default function MatchCard() {
  return (
    <div>
      <h1>Matches</h1>
      <Card className={styles.matchCard}>
        <Card.Body className={styles.cardBody}>
          <Card.Title>Freddorators vs. Grovesters</Card.Title>
          <Card.Text>
            <Row>
              <Col xs={3}>Corey Sawin</Col>
              <Col>31.0</Col>
              <Col>6</Col>
              <Col>3</Col>
              <Col>6</Col>
            </Row>
            <Row>
              <Col xs={3} className={styles.cardRow}>
                Megan Smith
              </Col>
              <Col>33.2</Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col xs={3}>Tommy Smith</Col>
              <Col>32.0</Col>
              <Col>2</Col>
              <Col>6</Col>
              <Col>4</Col>
            </Row>
            <Row>
              <Col xs={3}>Katie Smith</Col>
              <Col>40.3</Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
