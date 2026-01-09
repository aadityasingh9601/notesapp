import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem note={note} />
      ))}
    </div>
  );
}
