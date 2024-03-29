import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    // dispatch가 변화하면
    const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch])
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch])

    return (
        <Todos
            todos={todos}
            onToggle={onToggle}
            onCreate={onCreate}
        />
    )
}

export default TodosContainer;