import React, { useState, useEffect } from "react";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") {
        setBackgroundImage(
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489%27"
        );
      } else if (event.key === "ArrowDown") {
        setBackgroundImage(
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-shoes//w/1920/IMAGE-landscape-default-fill-656fc2ed-09b8-4aa2-aa58-1ed1ebefaf31-default_0.jpg?ts=1683833294578%27"
        );
      } else if (event.key === "ArrowLeft") {
        setBackgroundImage(
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1366/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276"
        );
      } else if (event.key === "ArrowRight") {
        setBackgroundImage(
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-collection//w/1920/IMAGE-landscape-default-fill-9e19aff3-b564-484d-b0f0-11b64bfe7717-default_0.jpg?ts=1683832897603%27"
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       <h1>
        Hello Amrou
       </h1>
      </main>
    </>
  )
}
