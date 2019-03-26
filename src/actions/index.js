import * as actionTypes from './types';
import {
  todosRef
} from '../config'

import _ from 'lodash';

//actions as functions to update firebase store

export const addItem = text => dispatch => {
  todosRef.push().set({
    title: text,
    completed: false
  });
};


export const removeItem = uid => dispatch => {
  todosRef.child(uid).remove();
};


export const toggleItem = uid => dispatch => {
  let checker;
  todosRef.child(uid).once('value', snapshot => {
    checker = snapshot.val().completed;
  });
  checker === true ?
    todosRef.child(uid).update({
      completed: false
    }) :
    todosRef.child(uid).update({
      completed: true
    })
};

export const toggleAll = () => dispatch => {
  todosRef.once('value')
  .then(snapshot => {
    const hasIncomplete = _.some(snapshot.val(), item => item.completed === false);
     _.map(snapshot.val(), (item, key) => {
        todosRef.child(key).update({
          completed: hasIncomplete
        })
     })
    })
  }


export const clearCompleted = () => dispatch => {
  todosRef.once('value')
  .then(snapshot => {
    _.map(snapshot.val(), (item, key) => {
      item.completed && todosRef.child(key).remove();
    })
  });
}

// action to get all data to local state

export const fetchData = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: actionTypes.FETCH_DATA,
      payload: snapshot.val()
    });
  });
};


// local action to set visibility filter

export const setRenderingFilter = (filter) => {
	return {
		type: actionTypes.SET_RENDERING_FILTER,
		filter
	};
}