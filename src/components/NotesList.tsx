import React from "react";
import { useNotes } from "../context/NotesContext";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteNoteButton from "./DeleteNoteButton";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const NotesList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <Box>
      {notes.map((note) => (
        <Card key={note.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{note.title}</Typography>
            {}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                whiteSpace: "pre-line",
                wordWrap: "break-word", 
              }}
            >
              {note.content}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "right", marginTop: 1 }}>
              <DeleteNoteButton noteId={note.id} />
              <Link to={`/edit/${note.id}`}>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NotesList;
