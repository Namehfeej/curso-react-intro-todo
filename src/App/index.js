import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


/*
const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Hacer curso Platzi", completed: true},
  {text: "Contar un cuento", completed: false},
  {text: "Bailar cantando", completed: true},
  {text: "Hablar del curso", completed: false},
  {text: "Escribe comentarios", completed: false},
  {text: "Realiz varias practicas", completed: false},
];
*/

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))



function App() {
  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>

  );
}



export default App;
