import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  removeTodo() {
    const id = this.props.todo.id;
    this.props.onRemoveClick(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <span>{todo.text}</span>
        <button onClick={this.removeTodo.bind(this)}>X</button>
      </div>
    );
  }
}
