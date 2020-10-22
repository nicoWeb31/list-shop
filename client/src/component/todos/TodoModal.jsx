import React, { Component } from 'react'
import { Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input} from 'reactstrap'
import {connect} from 'react-redux';

import {addTodo} from '../../redux/action/todoActions';



class TodoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            name:''
        };
    }

    toggle =()=>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onFormSubmit = () =>{
        console.log('submit')
    }

    onInputChange =(e)=>{
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state.name)
    }

        
    render() {
        return (
            <div>

            <Button
            color="dark"
            style={{marginBottom:'2rem'}}
            onClick={this.toggle}
            >Add Todo</Button>


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

                        </FormGroup>
                    </Form>
                </ModalBody>


            </Modal>

            </div>


        );
    }
}

export default connect()(TodoModal);