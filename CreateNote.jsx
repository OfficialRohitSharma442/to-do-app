import React, { useState } from "react";
import "./createnote.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expend, setExpend] = useState(false);
  const InputEvent = (event) => {
    /*     const value = event.target.value;
    const name = event.target.name; */
    const { name, value } = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: [value],
      };
    });
  };
  const AddEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const ShowTitle = () => {
    setExpend(true);
  };
  const normal = () => {
    setExpend(false);
  };
  return (
    <React.Fragment>
      <div className="main_note">
        <form>
          <div
            className="secoundery_div"
            onMouseLeave={normal}
            onMouseEnter={ShowTitle}
          >
            {expend ? (
              <input
                type="text"
                placeholder="Title"
                autoComplete="off"
                onChange={InputEvent}
                value={note.title}
                name="title"
              />
            ) : null}
            <textarea
              rows="2"
              column="2"
              placeholder="Write a Note"
              onChange={InputEvent}
              value={note.content}
              name="content"
            ></textarea>
            {expend ? (
              <Button className="button_style" onClick={AddEvent}>
                <AddIcon />
              </Button>
            ) : null}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default CreateNote;
