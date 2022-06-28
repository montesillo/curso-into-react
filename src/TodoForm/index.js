import React from "react";
import  { TodoContext } from '../TodoContext'; 
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla del almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                onClick={onCancel}
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export { TodoForm };