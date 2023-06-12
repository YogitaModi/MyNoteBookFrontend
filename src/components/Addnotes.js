import React, { useContext, useState } from "react";
import notesContext from "../context/notes/noteContext";
import { v4 as uuidv4 } from "uuid";

export default function Addnotes(props) {
  const noteContext = useContext(notesContext);
  const { addNotes } = noteContext;
  const [addnotes, setAddNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleAddNotes = (e) => {
    e.preventDefault();
    addNotes(addnotes.title, addnotes.description, addnotes.tag);
    setAddNotes({
      title: "",
      description: "",
      tag: "",
    });
    props.showalert("Added notes successfully", "success");
  };
  const onChange = (e) => {
    setAddNotes({ ...addnotes, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3" key={uuidv4}>
        <h2>Add a note</h2>
        <form className="my-3" onSubmit={handleAddNotes}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Notes Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={addnotes.title}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="description"
              value={addnotes.description}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={addnotes.tag}
              onChange={onChange}
            />
          </div>

          <button
            disabled={
              addnotes.title.length < 5 || addnotes.description.length < 5
            }
            type="submit"
            className="btn btn-primary"
            // onClick={handleAddNotes}
          >
            Add Notes
          </button>
        </form>
      </div>
    </div>
  );
}
