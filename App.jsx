import React, { useState } from "react";
import "./App.css";
import ToDolist from "./ToDolist";

const App = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);
  const onchangeHandeler = (e) => {
    setInputList(e.target.value);
  };
  const formValue = () => {
    if (inputList === " ") {
    }
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> To do list</h1>
          <br />
          <div className="upperfild">
            <input
              type="text "
              placeholder="Add item"
              onChange={onchangeHandeler}
              value={inputList}
            />
            <button className="plus" onClick={formValue}>
              +
            </button>
          </div>

          <ol>
            {items.map((data, index) => {
              return (
                <ToDolist
                  key={index}
                  id={index}
                  item={data}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
