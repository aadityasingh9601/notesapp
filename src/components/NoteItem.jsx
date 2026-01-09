export default function NoteItem({ note }) {
  return (
    <div key={note?.id}>
      <div>{note?.title}</div>
      <div>{note?.description}</div>
    </div>
  );
}
