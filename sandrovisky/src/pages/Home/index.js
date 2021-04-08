import React, { useState, useEffect } from "react";

import bgLight from "../../assets/images/bgLight.png";
import bgDark from "../../assets/images/bgDark.png";
import scarySound from "../../assets/sounds/scary.mp3";

import styles from "./styles.module.css";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(bgLight);

  useEffect(() => {
    setInterval(() => {
      const audio = new Audio(scarySound);
      audio.play();
      audio.loop = true;

      const imageList = [bgLight, bgDark];
      const imageRandom = imageList[Math.floor(Math.random() * imageList.length)];
      setSelectedImage(imageRandom);
    }, 1);
  }, []);

  return (
    <div
      className={styles.mainDiv}
      style={{ backgroundImage: `url(${selectedImage})` }}
    ></div>
  );
}
