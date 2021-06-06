import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");    // Hook for tracking input state change.
  const [items, setItems] = useState([]);            // Hook for tracking list items state change.

  function handleChange(event) {
    const newValue = event.target.value;  // holding added input value.//
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];            //Spread Operator which adds previous items and newly added item to items array.
    });
    setInputText("");     //set input text to empty once entry to list is done
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />   //call function when input value adds

        <button onClick={handleClick} type="submit">  //call function when button is clicked.
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {            // Dive into items array and <li> created for each item(todoItem) inside it using Arrow function.
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
