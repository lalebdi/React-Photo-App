import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";
import User3 from './User3';
import User1 from './User1';
import User2 from './User2';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-bar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Photo App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            </Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Users
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={User1}>
                <DropdownItem>
                  Stewie
                </DropdownItem>
                </Link>
                <Link to={User2}>
                <DropdownItem>
                  Quagmire
                </DropdownItem>
                </Link>
                <Link to={User3}>
                <DropdownItem>
                  Brian
                </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;