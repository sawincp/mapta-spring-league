"use client";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Sidenav() {
  return (
    <div className="sideNav-container">
      <Nav defaultActiveKey="/" className="flex-column">
        <Button variant="outline-light">
          <Nav.Link href="/">Home</Nav.Link>
        </Button>
        <Button variant="outline-light">
          <Nav.Link eventKey="link-1">Teams</Nav.Link>
        </Button>
        <Button variant="outline-light">
          <Nav.Link eventKey="link-2">Ratings</Nav.Link>
        </Button>
        <Button variant="outline-light">
          <Nav.Link eventKey={"link-3"}>News</Nav.Link>
        </Button>
        <Button variant="outline-light">
          <Nav.Link eventKey={"link-3"}>Products</Nav.Link>
        </Button>
      </Nav>
    </div>
  );
}
