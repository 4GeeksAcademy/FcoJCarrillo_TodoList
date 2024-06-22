import React, { useState } from "react";


export const Form = () => {
    const [task, setTask] = useState([]);
    const [valueInput, setvalueInput] = useState('');

    
    const handleSubmit =(event)=>{
        event.preventDefault();
    }

    const handleAddItemList = (event) => {
        if (event.key == "Enter") {
            if (valueInput.trim() !== "") {
                setTask([...task, valueInput])
                setvalueInput('');
            }
        }
    }

    const handleAddTask = (event) => {
        setvalueInput(event.target.value);
    }

    const deleteTask = (item) => {
        setTask(task.filter((element) => element !==item))
    }

    return (
        <div className="container">
            <h1>Escribe una tarea</h1>
            <form className="justify-content-center" onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                    <input type="text" className="form-control" id="exampleInputEmail1" value={valueInput} onChange={handleAddTask} onKeyPress={handleAddItemList} />
                </div>
                <div className="row d-flex justify-content-center">
                    <ul className="list-group col-xs-3 col-md-6">
                        <h4 className={task.length == 0 ? "" : "d-none"}>No hay task pendientes</h4>
                        {task.map((task,i) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center botonX" key={i}>
                                {task}
                                <span onClick={() =>deleteTask(task)}>
                                    <i className="fas fa-trash text-danger"></i>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-xs-auto col-md-6 text-end mt-3">{task.length} task</div>
                </div>
            </form>
        </div>
    );
};