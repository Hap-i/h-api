import React from "react";

function SideBar({ height, width, bgColor, children }) {
  const params = `${height} ${width} ${bgColor} `;
  return (
    <div className={params}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
}

export default SideBar;
