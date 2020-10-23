import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';



class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            email: '',
            password: '',
            message: null
        };
    }

    static propTypes = {
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //call register action


        //close modal
        this.toggle()
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.name)
    }



    render() {
        return (
            <div>

                <NavLink
                    onClick={this.toggle}
                    href="#"
                >
                    Register
            </NavLink>


                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Register
                </ModalHeader>
                    <ModalBody>
                        <Form action="" onSubmit={this.onFormSubmit}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter you name!"
                                    onChange={this.onInputChange}
                                    className="mb-3"
                                />

                                <Label for='email'>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter you email!"
                                    onChange={this.onInputChange}
                                    className="mb-3"
                                />

                                <Label for='passwor'>Passwor</Label>
                                <Input
                                    type="passwor"
                                    name="passwor"
                                    id="passwor"
                                    placeholder="Enter you passwor!"
                                    onChange={this.onInputChange}
                                    className="mb-3"
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>


        );
    }
}


const mapStateToProps = state => ({
    isAuth: state.auth.isAthutenticated,
    error: state.error
})



export default connect(null, {})(RegisterModal);