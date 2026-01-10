import { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import "./NoteList.css";

export default function NoteList({ notes, deleteNote }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Your notes</h2>
      <div className="notelist">
        {notes.length == 0 ? (
          <div className="emptystate">
            {loading ? "Loading..." : "No notes available"}
          </div>
        ) : (
          <div className="list">
            {notes.map((note) => (
              <NoteItem note={note} deleteNote={deleteNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
