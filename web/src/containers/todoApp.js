'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';
import * as todoActions from '../../../app/actions/todoActions';
import { connect } from 'react-redux';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <TodoList
        todos={state.todos}
        {...actions} />
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
