import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todolist/actions';

export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false
    };
    setTodoValue('');
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <div className='input-and-btn'>
            <input
              type='text'
              className='form-control'
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              placeholder='Add a new task...'
            />
            <button type='submit' className='btn btn-primary btn-md ms-2'>ADD</button>
          </div>
        </form>
      ) : (
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <div className='input-and-btn'>
            <input
              type='text'
              className='form-control'
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type='submit' className='btn btn-success btn-md'>UPDATE</button>
          </div>
          <button
            type='button'
            className='btn btn-secondary btn-md back-btn'
            onClick={cancelUpdate}
          >
            BACK
          </button>
        </form>
      )}
    </>
  );
};
