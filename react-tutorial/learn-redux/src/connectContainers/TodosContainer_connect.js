import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer({
    todos,
    addTodo,
    toggleTodo
}) {
    // dispatch가 변화하면
    const onCreate = useCallback((text) => addTodo(text), [addTodo])
    const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo])

    return (
        <Todos
            todos={todos}
            onToggle={onToggle}
            onCreate={onCreate}
        />
    )
}
const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToPros = {
    addTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToPros)(TodosContainer);