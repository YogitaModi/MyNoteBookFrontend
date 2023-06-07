import notesContext from "./noteContext";
import { useState } from "react";

import React from "react";

export default function NoteState(props) {
  const initialNotes = [
    {
      _id: "647f76e455cdd11398c5a0ae",
      user: "647f434d2be861a4544ba00a",
      title: "my notes title",
      description: "this is my notes description",
      tag: "practice",
      date: "2023-06-06T18:11:48.651Z",
      __v: 0,
    },
    {
      _id: "6480c054d678934b8eee79f2",
      user: "647f434d2be861a4544ba00a",
      title: "my second note title",
      description: "this is my second notes description",
      tag: "happy",
      date: "2023-06-07T17:37:24.912Z",
      __v: 0,
    },
    {
      _id: "647f76e455cdd11398c5a0ae",
      user: "647f434d2be861a4544ba00a",
      title: "my notes title",
      description: "this is my notes description",
      tag: "practice",
      date: "2023-06-06T18:11:48.651Z",
      __v: 0,
    },
    {
      _id: "6480c054d678934b8eee79f2",
      user: "647f434d2be861a4544ba00a",
      title: "my second note title",
      description: "this is my second notes description",
      tag: "happy",
      date: "2023-06-07T17:37:24.912Z",
      __v: 0,
    },
    {
      _id: "647f76e455cdd11398c5a0ae",
      user: "647f434d2be861a4544ba00a",
      title: "my notes title",
      description: "this is my notes description",
      tag: "practice",
      date: "2023-06-06T18:11:48.651Z",
      __v: 0,
    },
    {
      _id: "6480c054d678934b8eee79f2",
      user: "647f434d2be861a4544ba00a",
      title: "my second note title",
      description: "this is my second notes description",
      tag: "happy",
      date: "2023-06-07T17:37:24.912Z",
      __v: 0,
    },
    {
      _id: "647f76e455cdd11398c5a0ae",
      user: "647f434d2be861a4544ba00a",
      title: "my notes title",
      description: "this is my notes description",
      tag: "practice",
      date: "2023-06-06T18:11:48.651Z",
      __v: 0,
    },
    {
      _id: "6480c054d678934b8eee79f2",
      user: "647f434d2be861a4544ba00a",
      title: "my second note title",
      description: "this is my second notes description",
      tag: "happy",
      date: "2023-06-07T17:37:24.912Z",
      __v: 0,
    },
    {
      _id: "647f76e455cdd11398c5a0ae",
      user: "647f434d2be861a4544ba00a",
      title: "my notes title",
      description: "this is my notes description",
      tag: "practice",
      date: "2023-06-06T18:11:48.651Z",
      __v: 0,
    },
    {
      _id: "6480c054d678934b8eee79f2",
      user: "647f434d2be861a4544ba00a",
      title: "my second note title",
      description: "this is my second notes description",
      tag: "happy",
      date: "2023-06-07T17:37:24.912Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);

  return (
    <div>
      <notesContext.Provider value={{ notes, setNotes }}>
        {props.children}
      </notesContext.Provider>
    </div>
  );
}
