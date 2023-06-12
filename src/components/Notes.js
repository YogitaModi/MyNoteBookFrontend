import React, { useContext, useEffect, useRef, useState } from "react";

import notesContext from "../context/notes/noteContext";
import { v4 as uuidv4 } from "uuid";
import NotesItem from "./NotesItem";
import Addnotes from "./Addnotes";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  const navigate = useNavigate();
  const notesDisplay = useContext(notesContext);
  const { notes, getNotes, updateNotes } = notesDisplay;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [addnotes, setAddNotes] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  // compound did mount server side rendering
  useEffect(() => {
    // let x = localStorage.getItem("auth-token");
    if (localStorage.getItem("auth-token")) {
      navigate("/");
      getNotes();
    } else {
      navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  const updateNote = (currentnotes) => {
    ref.current.click();
    setAddNotes({
      id: currentnotes._id,
      etitle: currentnotes.title,
      edescription: currentnotes.description,
      etag: currentnotes.tag,
    });
  };

  const handleUpdateNotes = (e) => {
    e.preventDefault();
    updateNotes(
      addnotes.id,
      addnotes.etitle,
      addnotes.edescription,
      addnotes.etag
    );
    props.showalert("Notes Updated", "success");
    refClose.current.click();
  };
  const onChange = (e) => {
    setAddNotes({ ...addnotes, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Addnotes showalert={props.showalert} />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Notes Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={addnotes.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edesc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edesc"
                    name="edescription"
                    onChange={onChange}
                    value={addnotes.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={addnotes.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  addnotes.etitle.length < 5 || addnotes.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNotes}
              >
                Update changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>You notes</h2>
        <div className="container">
          {notes.length === 0 && "No notes to view"}
        </div>
        {notes.map((note) => {
          return (
            <NotesItem
              note={note}
              key={uuidv4()}
              updateNote={updateNote}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </div>
  );
}
