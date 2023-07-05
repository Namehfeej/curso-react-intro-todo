import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
function TodoForm(){

    const {
        AddTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit=(event) => {
        AddTodo(newTodoValue);
        event.preventDefault();
        setOpenModal(false);
    }

    const onCancel=(event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue (event.target.value);
    };

    return(
<form onSubmit={onSubmit}>
    <label> Escribe un nuevo TODO</label>
    <textarea 
    placeholder="Cortar cebolla para el almuerzo"
    value={newTodoValue}
    onChange={onChange}
    />
<div className="TodoForm-buttonContainer">
    <button
    type="button"
    className="TodoForm-button TodoForm--cancel"
    onClick={onCancel} >
        Cancelar
    </button>

    <button 
    type="submit"
    className="TodoForm-button Todo-Form--Add">
        Añadir
    </button>

</div>


</form>
    )
    
}

export { TodoForm };