import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import RestoreIcon from "@mui/icons-material/Restore";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";

const COLOR_TEAL = "#00ADB5";
export const AppSidebarData = [
  {
    id: 1,
    title: "Roles",
    menu: "roles",
    icon: (
      <AdminPanelSettingsIcon
        fontSize="large"
        sx={{ color: COLOR_TEAL }}
      ></AdminPanelSettingsIcon>
    ),
  },
  {
    id: 2,
    title: "Commits",
    menu: "commits",
    icon: (
      <RestoreIcon fontSize="large" sx={{ color: COLOR_TEAL }}></RestoreIcon>
    ),
  },
  {
    id: 3,
    title: "Connect to Github",
    menu: "github",
    icon: <GitHubIcon fontSize="large" sx={{ color: COLOR_TEAL }}></GitHubIcon>,
  },
  {
    id: 4,
    title: "Settings",
    menu: "settings",
    icon: (
      <SettingsIcon fontSize="large" sx={{ color: COLOR_TEAL }}></SettingsIcon>
    ),
  },
];
