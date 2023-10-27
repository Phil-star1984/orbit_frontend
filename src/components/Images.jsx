import React, { useState, useEffect } from "react";
import axios from "axios";

function Images() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Replace with the URL of the image API
    const imageUrl =
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";

    // Using Axios (if installed)
    // axios.get(imageUrl, { responseType: 'arraybuffer' })
    //   .then((response) => {
    //     const base64 = btoa(
    //       new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    //     );
    //     setImage(`data:image/jpeg;base64,${base64}`);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching image:', error);
    //   });

    // Using fetch (built-in)
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((data) => {
        const blobUrl = URL.createObjectURL(data);
        setImage(blobUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return <div>{image && <img src={image} alt="Fetched Image" />}</div>;
}

export default Images;
