import React from 'react';
import FormAdd from './formAdd.component';
import FormDelete from './formDelete.component';

const TodoForm = () => {
    return (
        <div>
            <FormAdd />
            <FormDelete />
        </div>
    )
}

export default TodoForm;