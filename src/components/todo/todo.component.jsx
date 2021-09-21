import React from 'react';
import TodoForm from '../todoForm/todoForm.component';
import TodoList from '../todolist/todoList.component';

const Todo = () => {
    return (
        <div>
            <TodoList />
            <hr />
            <TodoForm />
        </div>
    )
}

export default Todo;