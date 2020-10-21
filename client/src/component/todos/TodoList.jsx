import React, { Component } from 'react';
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import { CSSTransition, TransitionGroup}from "react-transition-group";
import {v1 as uuid} from "uuid";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:uuid(),name:'jardin',status:false},
                {id:uuid(),name:'cuisine',status:false},
                {id:uuid(),name:'ranger',status:true},
                {id:uuid(),name:'acheter un turc',status:false},
                {id:uuid(),name:'autre',status:false}
            ]
        };

    }

    addTodo = () =>{
        const name = prompt('Enter todo')
        if(name){
            this.setState(state=>({
                todos :[...state.todos,{id : uuid(), name}
                ]
            }))
        }
    }

    deleteTodo = (id) =>{
        this.setState(state=>({
            todos : state.todos.filter(todo => todo.id !== id)
        }))
    }


    render() {

        return (
            <Container>


                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.addTodo}
                >Add Todo</Button>

                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {this.state.todos.map(({id,name})=>(

                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>this.deleteTodo(id)}
                                >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

export default TodoList;