import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const saveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div>
      <NoteForm saveNote={saveNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
