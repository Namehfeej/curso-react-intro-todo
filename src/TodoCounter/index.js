import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  if (totalTodos === completedTodos) {
    return (
      <h1 className="TodoCounter">
        ¡Felicitaciones! Has completado todas las tareas pendientes 👏
      </h1>
) 
} else {
          return (
            <h1 className="TodoCounter">
              Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
            </h1>
    )
  }
}
  

  export {TodoCounter};