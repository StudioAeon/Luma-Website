import React from "react";
import { useNavigate } from "react-router-dom";

const DownloadButton = () => {
  const navigate = useNavigate();

  const getDownloadPath = () => {
    const platform = navigator.userAgent.toLowerCase();
    if (platform.includes("win")) return "/download/windows/";
    if (platform.includes("mac")) return "/download/macos/";
    if (platform.includes("linux")) return "/download/linux/";
    return "/download/";
  };

  return (
    <button onClick={() => navigate(getDownloadPath())} className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-mocha-text focus:text-mocha-text hover:bg-mocha-surface0 focus:outline-none focus:shadow-outline">
      Download
    </button>
  );
};

export default DownloadButton;
