import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { TextField, Button, Box } from "@mui/material";

const AddNote: React.FC = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { color: "white" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "white", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", 
            },
          },
        }}
      />
      <TextField
        fullWidth
        label="Content"
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
        multiline
        rows={4}
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: { color: "white" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "white", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", 
            },
          },
        }}
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3, height: 70 }}
      >
        Add Note
      </Button>
    </Box>
  );
};

export default AddNote;
