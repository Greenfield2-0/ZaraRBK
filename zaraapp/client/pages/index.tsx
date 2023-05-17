import React, { useState, useEffect } from "react";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [slideDirection, setSlideDirection] = useState(1); 
  const slideInterval = 3000; 

  const images = [
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489%27",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-shoes//w/1920/IMAGE-landscape-default-fill-656fc2ed-09b8-4aa2-aa58-1ed1ebefaf31-default_0.jpg?ts=1683833294578%27",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1366/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-collection//w/1920/IMAGE-landscape-default-fill-9e19aff3-b564-484d-b0f0-11b64bfe7717-default_0.jpg?ts=1683832897603%27"
  ];

  useEffect(() => {
    const slideBackgroundImage = () => {
      const currentIndex = images.indexOf(backgroundImage);
      let nextIndex = currentIndex + slideDirection;

      if (nextIndex >= images.length) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = images.length - 1;
      }

      setBackgroundImage(images[nextIndex]);
    };

    const interval = setInterval(slideBackgroundImage, slideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImage, slideDirection]);

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const footerStyle = {
    position: "dynamic",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "white",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "slideIn 1s ease-in-out infinite alternate",
  };

  return (
    <>
    </>
  )
}

export default App;
