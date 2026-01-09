import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import { useState } from "react";

export default function NoteForm({ saveNote }) {
  const [formData, setformData] = useState({
    id: Math.random(),
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const target = e.target.name;
    const value = e.target.value;

    setformData[target] = value;
  };
  return (
    <div>
      <form onSubmit={() => saveNote(formData)}>
        <Input
          placeholder="Enter your title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Enter your description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button text="Submit" />
      </form>
    </div>
  );
}
