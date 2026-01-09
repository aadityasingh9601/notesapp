export default function Input({ placeholder, name, onChange, value }) {
  return (
    <div>
      <input
        placeholder="placeholder"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
