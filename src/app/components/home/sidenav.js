"use client";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { IoHome, IoLocationOutline } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";

const navItems = [
  { href: "/",         icon: IoHome,              label: "Home" },
  { href: "/ratings",  icon: LuUserRoundSearch,   label: "Players" },
  { href: "/locations",icon: IoLocationOutline,   label: "Locations" },
  { href: "/news",     icon: FaRegNewspaper,      label: "News" },
  { href: "/products", icon: RiShoppingCart2Line, label: "Products" },
  { href: "/account",  icon: RiShoppingCart2Line, label: "Account" },
];

export default function SideNav() {
  return (
    <div className="sideNav-container">
      <Nav defaultActiveKey="/" className="flex-column">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Button key={href} variant="outline-light" className="mb-2">
            <Nav.Link href={href} className="d-flex align-items-center">
              <Icon className="me-2" size={23} />
              <span>{label}</span>
            </Nav.Link>
          </Button>
        ))}
      </Nav>
    </div>
  );
}