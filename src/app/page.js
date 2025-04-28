import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Hello Bootstrap</h1>
          <Button variant="primary">Click Me</Button>
        </Col>
      </Row>
    </Container>
  );
}