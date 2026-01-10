import Button from "./Button";
import "./NoteItem.css";

export default function NoteItem({ note, deleteNote }) {
  return (
    <div className="noteitem" key={note?.id}>
      <div className="title">Title: {note?.title}</div>
      <div className="description"> Description: {note?.description}</div>
      <Button text="Delete" onClick={() => deleteNote(note?.id)} />
    </div>
  );
}
