"use client";
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function DashboardContent() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Typography>Overview Content</Typography>;
      case "Analytics":
        return <Typography>Analytics Content</Typography>;
      case "Reports":
        return <Typography>Reports Content</Typography>;
      case "Settings":
        return <Typography>Settings Content</Typography>;
      default:
        return <Typography>Select a tab</Typography>;
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {activeTab}
      </Typography>
      {renderContent()}
    </Box>
  );
}
