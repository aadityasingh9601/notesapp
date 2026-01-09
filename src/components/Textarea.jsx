export default function Textarea({ placeholder, name, onChange, value }) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
}
