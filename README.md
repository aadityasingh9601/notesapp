# Notes Management Application

## Project Overview

A simple & intuitive notes-taking application built with React and Vite. Users can create, view, and delete notes with a clean and user-friendly interface. The application has form validation, loading states, and a clean design for managing personal notes efficiently.

## How to Run the App

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)

### Installation

1. Clone the repository & navigate to the project directory:

```bash
cd notesapp
```

2. Install dependencies:

```bash
npm install
```

### Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Component Breakdown

### App (`src/App.jsx`)

The main application component that serves as the root container. It manages the global state for all notes and coordinates data flow between child components.

### NoteForm (`src/components/NoteForm.jsx`)

A form component for creating new notes. It manages local form state (formData) and handles form submission. Includes validation to ensure the title field is not empty before submission.

### NoteList (`src/components/NoteList.jsx`)

Displays the list of all notes. Handles the empty state (showing "No notes available" when the list is empty) and includes a loading state for better UX.

### NoteItem (`src/components/NoteItem.jsx`)

Represents a single note in the list. Displays the note's title and description, and provides a delete button to remove the note.

### Button (`src/components/Button.jsx`)

A reusable button component that accepts text, onClick handler, and disabled state as props. (onClick & disaabled state are optional)

## State Explanation

### State Location

The main application state (`notes` array) lives in the **App component** (`src/App.jsx`).

### Data Flow

1. **State Management**:

   - The `notes` array is stored in App component using `useState` hook
   - Two handler functions are defined in `App.jsx`: `saveNote` and `deleteNote`

2. **Adding Notes (Upward Flow)**:

   - `NoteForm.jsx` maintains local state (`formData`) for form inputs
   - On form submission, `NoteForm.jsx` calls the `saveNote` function passed as a prop from `App.jsx`
   - App updates the `notes` array, adding the new note with a generated ID

3. **Displaying Notes (Downward Flow)**:

   - App passes the `notes` array as a prop to `NoteList.jsx`
   - `NoteList` maps through the notes and renders a `NoteItem.jsx` for each note
   - Each `NoteItem.jsx` receives individual note data as props

4. **Deleting Notes (Upward Flow)**:
   - `deleteNote` function is passed from `App.jsx` → `NoteList.jsx` → `NoteItem.jsx`
   - When delete button is clicked in `NoteItem.jsx`, it calls `deleteNote` function with the note's ID
   - App filters out the note from the `notes` array, updating the state
