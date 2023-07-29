import React, { useState } from "react";
import './index.css'

import ToDoList from "./ToDoList";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setNewItem(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, newItem];
    });
    setNewItem("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_container">
        <div className="center_div">
          <h1 className="heading">to do list</h1>
          <div className="items_container">
            <input type="text" placeholder="Add a Item" onChange={itemEvent} value={newItem} />
            <button onClick={listOfItems}><i className="fa-solid fa-plus"></i></button>

            <ol>
              {items.map((itemVal, index) => {
                return <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              })}
            </ol>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;