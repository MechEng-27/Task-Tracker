import * as React from 'react';
import Notes from "./Notes";
import { Note } from "../models/note.model";

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
};

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes, setNotes }) => {
  // filter to remove note upon clicking delete button
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  };

  const renderNotes = ():JSX.Element[] => {
    return notes.map(note => {
      return (<Notes key={ note.id } note={ note }
      handleDelete={ handleDelete }/>)
    });
  };

  return (
    <>
        <h2 className="pt-3">Open Tasks</h2>
        <div>{ renderNotes() }</div>
    </>
  );
};

export default NotesList;
