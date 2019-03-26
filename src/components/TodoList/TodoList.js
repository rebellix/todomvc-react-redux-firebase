import React, { Component } from 'react';
import _ from 'lodash';
import TodoListItem from '../TodoListItem';

import './TodoList.css';

class TodoList extends Component {
  
  componentWillMount = () => {
    this.props.fetchData();
  }
  
  render() {
    const { data } = this.props;

    if (data) {
      return (
        <ul className="list-group">
          {
            _.map(data, (todo, key) => 
            <TodoListItem 
              todo={ todo } 
              key={ key } 
              uid={ key } />).reverse()
          }
        </ul>
      );
    }
    
    else {
      return (
        <div className="spinner-border m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } 

  }
} 

export default TodoList