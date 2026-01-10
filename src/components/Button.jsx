import "./Button.css";

export default function Button({ text, disabled = false, onClick = () => {} }) {
  return (
    <div>
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
