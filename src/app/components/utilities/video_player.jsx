"use client";
import { useState } from "react";
import YouTube from "react-youtube";
const Video = ({ YouTubeid }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleClose}
          className="text-color-primary float-right bg-color-secondary px-5 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={YouTubeid}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleClose}
      className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark"
    >
      {" "}
      TONTON TRAILER{" "}
    </button>
  );
};

export default Video;
