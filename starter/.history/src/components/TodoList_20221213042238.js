import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
	cnst
const todos = useSelector((state)=> state.todos);

	return (
		<ul className='list-group' >
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
