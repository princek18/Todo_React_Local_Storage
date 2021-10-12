import React, { useState } from 'react'
import './MainComponent.css'

export const MainComponent = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(localStorage.getItem('todos').split(","));

    const deleteTodo = (todoD) => {
        let remain = localStorage.getItem('todos').split(',').filter((one) => one !== todoD);
        localStorage.setItem('todos', remain);
        let k = localStorage.getItem('todos').split(',');
        setTodos(k);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let k = localStorage.getItem('todos').split(",");
        k.push(todo);
        localStorage.setItem("todos", k);
        setTodos(localStorage.getItem('todos').split(','));
        setTodo("");
    }
    return (
        <div>
            <h1 className="title">This is MainComponent!</h1>
            <form onSubmit={handleSubmit}>
                <input required onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Enter any task"/>
                <button className="submit" type="submit">Add</button>
            </form>
            {todos.map((todo, index) => {
                return todo !== ''?<div className="todo" key={index}>
                    <h1>{todo}</h1>
                    <button className="delete" onClick={() => deleteTodo(todo)}>Delete</button>
                </div>:null
            })}
        </div>
    )
}
