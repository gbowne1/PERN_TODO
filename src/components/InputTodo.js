import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description , setDescription] = useState("hello")
  return (
      <Fragment>
          <h1 className="text-center mt-5">Pern Todo List</h1>
          <form className="d-flex mt-5">
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success"> Add</button>
            
          </form>
      </Fragment>
   };
};

export default InputTodo;