import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div>
    <input ref={node => {
        input = node;
      }} />
    <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>Vai</button>
    </div>
  );
};

export default TodoForm
