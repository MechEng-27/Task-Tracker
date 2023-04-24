import React, { useState } from "react";
import Header from "./components/Header"
import NotesList from "./components/NotesList"
import { Note } from "./models/note.model"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row} from "react-bootstrap"

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
      <Container className="mt-5">
        <Col>
          <NotesList notes= { notes } />
        </Col>
      </Container>
    </>

  );
}

export default App
