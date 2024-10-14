"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function Settings() {
  const [notifications, setNotifications] = React.useState(true);

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: 400 }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="Display Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
        />
        <FormControlLabel
          control={
            <Switch
              checked={notifications}
              onChange={handleNotificationChange}
              name="notifications"
              color="primary"
            />
          }
          label="Enable Notifications"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>
    </>
  );
}
