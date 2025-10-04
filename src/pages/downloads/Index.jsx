import React from "react";

const DownloadIndex = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-semibold">Select Your Platform to Download</h1>
      <p>Please choose the appropriate version of the engine for your system.</p>
      <div className="mt-4">
        <a href="https://github.com/StudioAeon/Zenith/releases/latest" className="px-6 py-2 bg-blue-600 text-white rounded-lg mx-2">
          Download for Windows
        </a>
        <a href="https://github.com/StudioAeon/Zenith/releases/latest" className="px-6 py-2 bg-blue-600 text-white rounded-lg mx-2">
          Download for MacOS
        </a>
        <a href="https://github.com/StudioAeon/Zenith/releases/latest" className="px-6 py-2 bg-blue-600 text-white rounded-lg mx-2">
          Download for Linux
        </a>
      </div>
    </div>
  );
};

export default DownloadIndex;