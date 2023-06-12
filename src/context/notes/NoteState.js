import notesContext from "./noteContext";
import { useState } from "react";

import React from "react";

export default function NoteState(props) {
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // fetch all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const json = await response.json();

    setNotes(json);
  };

  // Adding notes
  const addNotes = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    setNotes(notes.concat(json));
  };
  //Editing notes
  const updateNotes = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  //Deleting notes
  const deleteNotes = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const json = await response.json();
    console.log(json);
    const newArr = notes.filter((note) => {
      return note._id !== id;
    });
    console.log(id);
    setNotes(newArr);
    // props.showalert("notes deleted successfully", "success");
  };

  return (
    <div>
      <notesContext.Provider
        value={{ notes, addNotes, updateNotes, deleteNotes, getNotes }}
      >
        {props.children}
      </notesContext.Provider>
    </div>
  );
}
