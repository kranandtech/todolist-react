import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { removeTodo, handleCheckbox } from '../redux/todolist/actions';

export const TaskList = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className='todo-page with-border'>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div key={todo.id} className='card mb-3'>
            <div className='card-body d-flex justify-content-between align-items-center'>
              <div className='form-check'>
                {editFormVisibility === false && (
                  <input
                    type='checkbox'
                    className='form-check-input'
                    checked={todo.completed}
                    onChange={() => dispatch(handleCheckbox(todo.id))}
                  />
                )}
                <label
                  className='form-check-label ms-2'
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                  {todo.todo}
                </label>
              </div>
              <div className='actions-box'>
                {editFormVisibility === false && (
                  <>
                    <button className='btn btn-link btn-sm' onClick={() => handleEditClick(todo)}>
                      <Icon icon={edit2} />
                    </button>
                    <button className='btn btn-link btn-sm' onClick={() => dispatch(removeTodo(todo.id))}>
                      <Icon icon={trash} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
