import React, { Component } from 'react';

import { Nav, NavItem, NavLink, NavbarText, NavbarBrand, Navbar } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Topmenu extends Component {
    render() {
        return (
                <Navbar className="bg-secondary text-white">
                  <NavbarBrand>CongMinh</NavbarBrand>
                  <Nav className="ml-auto">
                    <NavItem >
                      <NavLink href="#">
                        <Link className="text-light" to="/">Home</Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">
                        <Link className="text-light" to="/products">Products</Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="text-danger" href="#">
                        <Link className="text-danger" to="/products">Cart (0)</Link>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
        );
    }
} 

