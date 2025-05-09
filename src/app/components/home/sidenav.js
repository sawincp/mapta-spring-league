"use client";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { IoHome } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Sidenav() {
  return (
    <div className="sideNav-container">
      <Nav defaultActiveKey="/" className="flex-column">
        <Button variant="outline-light" className="mb-2">
          <Nav.Link href="/" className="d-flex align-items-center">
            <IoHome className="me-2" size={18} />
            <span>Home</span>
          </Nav.Link>
        </Button>
        <Button variant="outline-light" className="mb-2">
          <Nav.Link href="/ratings" className="d-flex align-items-center">
            <FiBarChart className="me-2" size={18} />
            <span>Players</span>
          </Nav.Link>
        </Button>
        <Button variant="outline-light" className="mb-2">
          <Nav.Link href="/locations" className="d-flex align-items-center">
            <IoLocationOutline className="me-2" size={18} />
            <span>Locations</span>
          </Nav.Link>
        </Button>
        <Button variant="outline-light" className="mb-2">
          <Nav.Link eventKey="link-3" className="d-flex align-items-center">
            <FaRegNewspaper className="me-2" size={18} />
            <span>News</span>
          </Nav.Link>
        </Button>
        <Button variant="outline-light" className="mb-2">
          <Nav.Link eventKey="link-3" className="d-flex align-items-center">
            <RiShoppingCart2Line className="me-2" size={18} />
            <span>Products</span>
          </Nav.Link>
        </Button>
      </Nav>
    </div>
  );
}
