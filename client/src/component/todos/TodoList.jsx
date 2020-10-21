import React, { Component } from 'react';
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import { CSSTransition, TransitionGroup}from "react-transition-group";
import {v1 as uuid} from "uuid";

//connect form wrap component
import {connect} from 'react-redux';
//action
import {getTodos} from '../../redux/action/todoActions';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount(){
        this.props.getTodos();
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
        console.log(this.props.todos)

        return (
            <Container>


                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.addTodo}
                >Add Todo</Button>

                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {this.props.todos && this.props.todos.todos.map(({id,name})=>(

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

//  state ----> combineReduceer -----> statevalue
const mapStateToProps = (state) =>({todos:state.todo})
export default connect(mapStateToProps,{getTodos})(TodoList);