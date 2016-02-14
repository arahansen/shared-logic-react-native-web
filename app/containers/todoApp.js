'use strict';

import React, { Component, View } from 'react-native';
import { bindActionCreators } from 'redux';

import * as todoActions from '../actions/todoActions';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View>
        <AddTodo
          {...actions} />
        <TodoList
          todos={state.todos}
          {...actions} />
      </View>
    );
  }
}

export default connect(state => ({
    state: state.todos
  }),
  (dispatch) => ({
    actions: bindActionCreators(todoActions, dispatch)
  })
)(TodoApp);
