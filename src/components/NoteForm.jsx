import "./NoteForm.css";
import Button from "./Button";

import { useState } from "react";

export default function NoteForm({ saveNote }) {
  const [formData, setformData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setformData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  return (
    <div>
      <h2>Add new note</h2>
      <div className="noteform">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            saveNote(formData);
            setformData({
              title: "",
              description: "",
            });
          }}
        >
          <input
            placeholder="Enter your title"
            name="title"
            onChange={handleChange}
            value={formData?.title}
          />
          {formData.title == "" && (
            <div className="error">Title can't be empty!</div>
          )}
          <textarea
            placeholder="Enter description"
            name="description"
            onChange={handleChange}
            value={formData?.description}
          ></textarea>
          <Button text="Submit" disabled={formData.title == ""} />
        </form>
      </div>
    </div>
  );
}
