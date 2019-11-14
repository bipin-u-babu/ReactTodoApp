import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import store from "../Flux/stores/todoStore";
import {saveTodo, getTodos, deleteTodo} from "../Flux/actions/todoActions";
class TodoPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {todos: [], todo: {title: '', id: ''}};
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
       
    }
    add(_todo) {
        saveTodo(_todo)
   }

    onChange = () => {
        this.setState({
            todos: store.getTodos(),
            todo: {title: '', id: ''}
        });
    }

    delete(id) {
        deleteTodo(id);
    }

    componentDidMount () {
        store.addChangeListener(this.onChange);

        if(store.getTodos().length === 0 ) getTodos();
    }

    render() {
        return (
            
            <div>
            <TodoForm add = {this.add} todo = {this.state.todo}></TodoForm>
            <TodoList todos = {this.state.todos} delete = {this.delete}></TodoList> 
            </div>
        )
    }
}

export default TodoPage;
