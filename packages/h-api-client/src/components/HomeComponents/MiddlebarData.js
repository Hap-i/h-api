import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const COLOR_TEAL = "#00ADB5"
export const MiddlebarData = [
    {
        id: 1,
        title: "Apps",
        icon: <AppsIcon sx={{ color: COLOR_TEAL }}></AppsIcon>
    },
    {
        id: 2,
        title: "Workspace Settings",
        icon: <SettingsIcon sx={{ color: COLOR_TEAL }}></SettingsIcon>
    },
    {
        id: 3,
        title: "Workspace Members",
        icon: <PeopleAltIcon sx={{ color: COLOR_TEAL }}></PeopleAltIcon>
    },
    {
        id: 4,
        title: "Workspace",
        icon: <WorkspacesIcon sx={{ color: COLOR_TEAL }}></WorkspacesIcon>
    }
]