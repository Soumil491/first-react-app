import React from 'react';
import { useSelector } from 'react-redux';
import TodoTasks from './todoTasks.jsx';

const TodoList = () => {
    const todoTasks = useSelector(state => state.tasks);

    return(
        <div className="todoList">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todoTasks.map(item => {
                        return (
                            <TodoTasks key = {item.id} {...item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;