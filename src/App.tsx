import React, { useState } from "react";
import Header from "./components/Header"
import { Note } from "./models/note.model"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [notes, setNotes] = useState<Note[]>
  ([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);

  return (
    <>
      <Header />
    </>

  );
}

export default App
