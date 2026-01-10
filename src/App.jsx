import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const saveNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { id: Math.random(), ...newNote }];
    });
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id != noteId);
    });
  };
  return (
    <div className="mainBox">
      <h1>Notes Management Application</h1>
      <NoteForm saveNote={saveNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
