import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const AlgoNav = props => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AlgoTrade</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default AlgoNav