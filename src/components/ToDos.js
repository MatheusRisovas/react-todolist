import React, { Component } from 'react';
import '../App.css';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo)=>(
        <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;