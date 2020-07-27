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
import { NavLink } from "react-router-dom";

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
            <NavLink>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            </NavLink>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Users
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink>
                <DropdownItem>
                  Stewie
                </DropdownItem>
                </NavLink>
                <NavLink>
                <DropdownItem>
                  Quagmire
                </DropdownItem>
                </NavLink>
                <NavLink>
                <DropdownItem>
                  Brian
                </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;