import React from 'react';
class TodoForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {todo: {'title': ''}};
  }
  onChangeHnadler = ({target}) => {
    const updatedTodo = {...this.state.todo, [target.name]: target.value }
    this.setState({todo: updatedTodo});
 }

 onSubmit = (event) => {
  event.preventDefault();
  this.props.add(this.state.todo);
  this.setState({todo: {'title': ''}});
 };

  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Add Todos</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
     
          <form className=" justify-content-center" onSubmit={this.onSubmit}  autoComplete="off" >
            <input type="text" className="form-control mb-2 mr-sm-2 " name='title' onChange={this.onChangeHnadler} value={this.state.todo.title} />
            <button type="submit" className="btn btn-primary mb-2">Add</button>
          </form>
        </div>
      </section>
    )
  }
}
export default TodoForm;