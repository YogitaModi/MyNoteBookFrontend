import React, { useContext } from "react";

import notesContext from "../context/notes/noteContext";
// import { v4 as uuidv4 } from "uuid";
import NotesItem from "./NotesItem";

export default function Notes() {
  const notesDisplay = useContext(notesContext);
  const { notes, setNotes } = notesDisplay;
  return (
    <div>
      <div className="row my-3">
        <h2>You notes</h2>
        {notes.map((notes) => {
          return <NotesItem notes={notes} />;
        })}
      </div>
    </div>
  );
}
