import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { login } from '../../redux/action/authAction';
import { clearError }from '../../redux/action/errorAction'



class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
            message: null
        };
    }

    static propTypes = {
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error,isAuth } = this.props
        console.log(this.props)
        if (error !== prevProps.error) {
            //check register error
            if (error.id === 'LOGIN_FAIL') {
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

        const { email, password } = this.state

        //create object
        const user = {
            email,
            password
        }

        //call login action
        this.props.login(user)

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
                    Login
            </NavLink>


                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Login
                </ModalHeader>
                    <ModalBody>

                        {this.state.message ?
                            (<Alert color="danger">
                                {this.state.message}
                            </Alert>) : null
                        }

                        <Form action="" onSubmit={this.onFormSubmit}>
                            <FormGroup>

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
                                >Login</Button>
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



export default connect(mapStateToProps, { login,clearError })(LoginModal);