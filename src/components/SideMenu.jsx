"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const menuItems = [
  { name: "Overview", icon: <DashboardIcon />, href: "/dashboard" },
  { name: "Analytics", icon: <BarChartIcon />, href: "/dashboard/analytics" },
  { name: "Reports", icon: <ReportIcon />, href: "/dashboard/reports" },
  { name: "Settings", icon: <SettingsIcon />, href: "/dashboard/settings" },
];

export default function SideMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  const handleNavigation = (href) => {
    setActiveTab(href);
    router.push(href);
  };

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              selected={activeTab === item.href}
              onClick={() => handleNavigation(item.href)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
