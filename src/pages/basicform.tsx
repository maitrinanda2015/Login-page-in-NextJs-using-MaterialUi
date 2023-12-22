import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";

interface Entry {
  email: string;
  password: string;
}

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState<Entry[]>([]);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry: Entry = { email, password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);

    // Clear the form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h5" style={{ color: "#3f51b5" }}>
          Basic Form with Material-UI
        </Typography>
        <form onSubmit={submitForm} style={{ width: "100%", marginTop: "20px" }}>
          <TextField
            label="Email"
            type="text"
            name="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px", backgroundColor: "#3f51b5", color: "#fff" }}>
            Submit
          </Button>
        </form>
        <Box marginTop="20px">
          {allEntry.map((curElem, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography>Email: {curElem.email}</Typography>
              <Typography>Password: {curElem.password}</Typography>
            </div>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default BasicForm;
