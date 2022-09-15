import React, { useState, useEffect } from "react";
import Edit from "./Edit";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos", {
        method: "GET",
      });
      const jsonData = await response.json();
      setTodos(jsonData);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <h4 className="font-bold">Description</h4>
            </th>
            <th>
              <h4 className="font-bold">Edit</h4>
            </th>
            <th>
              <h4 className="font-bold">Delete</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <Edit todo={todo}/>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(todo.todo_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
