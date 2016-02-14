import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  addTodo() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  onTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { todos, addTodo, removeTodo } = this.props;
    return (
      <div>
        <input type='text' onChange={this.onTextChange.bind(this)} value={this.state.text} />
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        {todos.map((todo, index) =>
          <Todo
            todo={todo}
            key={index}
            onRemoveClick={removeTodo}/>
        )}
      </div>
    );
  }
}
