import React from "react";
import "./TodoAddButton.css";
function TodoAddButton({ setOpenModal }) {
    return (
<button 
className="CreateAddButton"
onClick={
    () => {
        setOpenModal(state => !state)}
}
>+</button>
    )
  }

  export {TodoAddButton};