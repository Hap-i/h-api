import React from "react";

function SmallWindow() {
  return (
    <div className="bg-csBlack h-screen w-screen">
      <div className="grid h-screen place-items-center">
        <div>
          <img className="h-80" src="smallWindow/smallWindow.svg" alt="" />
          <div className="text-csWhite mt-5 text-xl text-center">
            Your resolution is too small
          </div>
          <div className="text-csWhite mt-1 text-center overflow-hidden">
            To enjoy H-api resize your browser to be atleast 1000px wide.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallWindow;
