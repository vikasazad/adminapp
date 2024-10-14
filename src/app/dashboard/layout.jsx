import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        {children}
      </Box>
    </Box>
  );
}
