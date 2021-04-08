import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import bgLight from "../../assets/images/bgLight.png";
import bgDark from "../../assets/images/bgDark.png";
import scarySound from "../../assets/sounds/scary.mp3";

import styles from "./styles.module.css";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(bgLight);

  useEffect(() => {
    setInterval(() => {
      const imageList = [bgLight, bgDark];
      const imageRandom = imageList[Math.floor(Math.random() * imageList.length)];
      setSelectedImage(imageRandom);
    }, 10);
  }, []);

  return (
    <>
      <ReactAudioPlayer src={scarySound} autoPlay />
      <div
        className={styles.mainDiv}
        style={{ backgroundImage: `url(${selectedImage})` }}
      ></div>
    </>
  );
}
