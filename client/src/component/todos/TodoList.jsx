import React, { Component } from 'react';
//connect form wrap component
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
//action
import { deleteTodo, getTodos } from '../../redux/action/todoActions';




class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount(){
        this.props.getTodos();
    }


    deleteTodo = (id) =>{
        this.props.deleteTodo(id)
    }


    render() {
        console.log(this.props.todos)

        return (
            <Container>


                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {this.props.todos && this.props.todos.todos.map(({_id,name})=>(

                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>this.deleteTodo(_id)}
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
export default connect(mapStateToProps,{getTodos,deleteTodo})(TodoList);