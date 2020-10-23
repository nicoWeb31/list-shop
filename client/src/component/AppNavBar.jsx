import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import RegisterModal from '../component/auth/RegisterModal';
import Logout from '../component/auth/Logout';
import LoginModal from '../component/auth/LoginModal'



class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">

                    <Container>
                        <NavbarBrand href="/">To do List !</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <RegisterModal />

                                </NavItem>
                                <NavItem>
                                    <Logout />
                                </NavItem>
                                <NavItem>
                                    <LoginModal />

                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Container>


                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;