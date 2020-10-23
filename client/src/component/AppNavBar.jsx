import React, { Component, Fragment } from 'react'
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
import LoginModal from '../component/auth/LoginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'



class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    static propTypes = {
        istAuth: PropTypes.object.isRequired,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        const { isAthutenticated, user } = this.props.istAuth
        const authLink = (
            <Fragment>
                <NavItem>
                    <Logout />
                </NavItem>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>
                            {user && `Welcome ${user.name}`}
                        </strong>
                    </span>
                </NavItem>
            </Fragment>
        )

        const guestLink = (
            <Fragment>
                <NavItem>

                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">

                    <Container>
                        <NavbarBrand href="/">To do List !</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAthutenticated ? authLink : guestLink}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProp = state => ({
    istAuth: state.auth
})



export default connect(mapStateToProp)(AppNavBar);