import React, { useState } from "react";

const Input = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      Window.location = "/"

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form onSubmit={handleSubmit} className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default Input;
