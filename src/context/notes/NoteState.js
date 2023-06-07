import notesContext from "./noteContext";
import { useState } from "react";

import React from "react";

export default function NoteState(props) {
  const [name, setName] = useState("type");
  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <notesContext.Provider value={{ name, updateName }}>
        {props.children}
      </notesContext.Provider>
    </div>
  );
}
