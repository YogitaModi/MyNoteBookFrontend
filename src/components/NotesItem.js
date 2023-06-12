import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import notesContext from "../context/notes/noteContext";

export default function NotesItem(props) {
  const { note, updateNote } = props;
  const context = useContext(notesContext);
  const { deleteNotes } = context;
  return (
    <div key={uuidv4()} className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p>{note.tag}</p>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNotes(note._id);
              props.showalert("notes deleted successfully", "success");
            }}
          ></i>
          <i
            className="fa-regular fa-pen-to-square"
            onClick={() => {
              updateNote(note);
              // props.showalert("notes updated successfully", "success");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
