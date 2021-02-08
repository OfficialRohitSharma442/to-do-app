import React, { useState } from "react";
import "./keep.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const GoogleKeep = () => {
  const [addItem, setItem] = useState([]);
  const addNote = (note) => {
    if (note.title.length && note.content.length !== 0) {
      setItem((pD) => {
        return [...pD, note];
      });
    } else {
      alert("Plz write on the both colum");
    }
  };
  const onDelete = (id) => {
    debugger;
    setItem((pD) => {
      return pD.filter((currentData, indx) => {
        return indx !== id;
      });
    });
    // debugger;
  };

  return (
    <React.Fragment>
      <Header />
      <CreateNote passNote={addNote} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0px 0px 11px 36px",
        }}
      >
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              DeleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default GoogleKeep;
