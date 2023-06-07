import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function NotesItem(props) {
  const { title, description } = props.notes;
  return (
    <div key={uuidv4} className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Notes
          </a>
        </div>
      </div>
    </div>
  );
}
