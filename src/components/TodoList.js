import React from 'react';
import Card  from "./Card";
/**
 * List Todos
 */
class TodoList extends React.Component {

    render() {
        return(
        <div className="album py-5 bg-light">
        <div className="container">
        <div className="row">
            {
                
                this.props.todos.map(item=> (
                    <Card key = {item.id} item = {item} onDelete= {this.props.delete}></Card>
                    )) 
            }
         </div>
         </div>
         </div>   
        
        )}
}
export default TodoList;