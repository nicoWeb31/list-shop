import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { register } from '../../redux/action/authAction';
import { clearError }from '../../redux/action/errorAction'



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
        register: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error,isAuth } = this.props
        console.log(this.props)
        if (error !== prevProps.error) {
            //check register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ message: error.message.message })
            } else {
                this.setState({ message: null })
            }
        }

        //if authenticated is ok,close modale
        if(this.state.modal){
            if(isAuth){
                this.toggle()
            }
        }
    }


    toggle = () => {
        this.props.clearError();
        this.setState({
            modal: !this.state.modal
        })
    }


    onFormSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = this.state

        //create object
        const newUser = {
            name,
            email,
            password
        }

        //call register action
        this.props.register(newUser)

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

                        {this.state.message ?
                            (<Alert color="danger">
                                {this.state.message}
                            </Alert>) : null
                        }

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

                                <Label for='password'>Passwor</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
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



export default connect(mapStateToProps, { register,clearError })(RegisterModal);