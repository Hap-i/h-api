import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function AppBottomBar() {
  return (
    <div className="fixed bottom-0 bg-cslightGrey w-full h-12 flex justify-between items-center">
      <div className="flex space-x-2 text-csWhite ml-5 text-sm">
        <div>Lat commit 12 days ago</div>
        <div>Build id: 098add9we</div>
      </div>
      <div className="flex items-center mr-6">
        <div>
          <Tooltip title="Download" placement="top" arrow>
            <IconButton>
              <CloudDownloadIcon sx={{ color: "#EEEEEE" }}></CloudDownloadIcon>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <button className="bg-csTeal text-csWhite w-36 rounded-sm flex items-center justify-center space-x-2 p-1 ml-1 hover:opacity-80">
            <div>Open Github</div>
            <div>
              <GitHubIcon fontSize="small" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBottomBar;
