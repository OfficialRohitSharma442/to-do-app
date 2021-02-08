import React from "react";
import "./App.css";
import DeleteIcon from "@material-ui/icons/Delete";
const ToDolist = (props) => {
  return (
    <React.Fragment>
      <li>
        {" "}
        <DeleteIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        {props.item}
      </li>
    </React.Fragment>
  );
};
export default ToDolist;
