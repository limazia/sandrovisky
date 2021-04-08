import React from "react";

import bgVideo from "../../assets/video/bgVideo.mp4";

import styles from "./styles.module.css";

export default function Home() {
  const handleVideoFullScreen = (event) => {
    if (event) event.preventDefault();

    const el = document.getElementById("video");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  return (
    <div className={styles.mainDiv}>
      <video
        id="video"
        onClick={handleVideoFullScreen}
        src={bgVideo}
        autoPlay
        loop
      ></video>
    </div>
  );
}
