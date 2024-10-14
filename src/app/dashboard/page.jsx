import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function DashboardOverview() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">1,234</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$56,789</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">New Orders</Typography>
            <Typography variant="h4">89</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Pending Support Tickets</Typography>
            <Typography variant="h4">23</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Recent Activity" />
            <CardContent>
              <Typography>
                List of recent activities would go here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
