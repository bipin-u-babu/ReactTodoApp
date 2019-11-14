import * as api from "../../api/todoApi";
import dispatcher from "../appDispacher";
import actionTypes from "./actionTypes";

export function saveTodo(todo) {
   return api.saveTodo(todo)
    .then((_todo)=>{
        dispatcher.dispatch({
            actionType: actionTypes.SAVE_TODO,
            todo: _todo
        })
    })
}

export function getTodos() {
    return api.getTodos()
     .then((todos)=>{
         dispatcher.dispatch({
             actionType: actionTypes.GET_TODO,
             todos: todos
         })
     })
 }

 export function deleteTodo(id) {
    return api.deleteTodo(id)
     .then(()=>{
         dispatcher.dispatch({
             actionType: actionTypes.DELETE_TODO,
             todoId: id
         })
     })
 }