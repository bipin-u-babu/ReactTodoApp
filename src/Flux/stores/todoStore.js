import { EventEmitter } from "events";
import dispacher from "../appDispacher";
import actionType from '../actions/actionTypes';

let _todos = []; 
class TodoStore extends EventEmitter {

    addChangeListener(callback) {
        this.on('change', callback);
    } 
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
    emitChange() {
        this.emit('change');
    }

    getTodos() {
        return _todos;
    }
}
const store = new TodoStore();

// register dispatcher in store 

dispacher.register(action => {
    switch (action.actionType) {
  
        case actionType.SAVE_TODO:
            _todos.push(action.todo);
            store.emitChange();
            break;
        case actionType.GET_TODO:
            _todos = action.todos;
            store.emitChange();
            break;
        case actionType.DELETE_TODO:
            const todos = _todos.filter(todo => todo.id !== action.todoId) ;
            _todos = todos;
            store.emitChange();
            break;

        default:
            break;
    }

});

export default store;