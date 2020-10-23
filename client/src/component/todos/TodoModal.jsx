import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { addTodo } from '../../redux/action/todoActions';
//import PropTypes from 'prop-types';




class TodoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            name:''
        };
    }

    // static propTypes = {
    //     isAuth: PropTypes.bool
    // }

    toggle =()=>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {
            name: this.state.name
        }

        //add todo with action
        this.props.addTodo(newTodo)


        //close modal
        this.toggle()
    }

    onInputChange =(e)=>{
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state.name)
    }


        
    render() {
        return (
            <div>

            {this.props.isAuth ? (

            <Button
            color="dark"
            style={{marginBottom:'2rem'}}
            onClick={this.toggle}
            >Add Todo</Button>


            ):
            (
                <h4 className="mb-3 ml-4"> Please login or register to manage yours todos</h4>
            )}


            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
                <ModalHeader toggle={this.toggle}>
                    Add a Todo
                </ModalHeader>
                <ModalBody>
                    <Form action="" onSubmit={this.onFormSubmit}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="todo"
                                placeholder="add a todo"
                                onChange={this.onInputChange}
                            />
                        <Button 
                        color="dark"
                        style={{marginTop:'2rem'}}
                        block
                        >Add Todo</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

            </div>


        );
    }
}

const mapStateProps = state =>({
    isAuth: state.auth.isAthutenticated
})

export default connect(mapStateProps,{addTodo})(TodoModal);