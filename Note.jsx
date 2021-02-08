import React from "react";
import "./Note.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note = (props) => {
  const DeleteNote = () => {
    props.DeleteItem(props.id);
  };
  return (
    <React.Fragment>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn">
          <DeleteOutlineIcon className="delete_icon" onClick={DeleteNote} />
        </button>
      </div>
    </React.Fragment>
  );
};
export default Note;
