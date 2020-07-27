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
import { Link  } from "react-router-dom";
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
            <Link to="/">
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            </Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Users
              </DropdownToggle>
              <DropdownMenu right>
                
                <DropdownItem>
                <Link to="/user1">
                  Stewie
                  </Link>
                </DropdownItem>
                
                
                <DropdownItem>
                <Link to="/user2">
                  Quagmire
                  </Link>
                </DropdownItem>
                
                
                <DropdownItem>
                <Link to="/user3">
                  Brian
                  </Link>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;