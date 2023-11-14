import { useState, useEffect } from "react";

const MemeJokeQuote = () => {
  const [content, setContent] = useState("");
  const [isMeme, setIsMeme] = useState(false);

  const fetchRandomContent = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      
      const contentValue = isMeme ? data.data.memes[0].url : data.value;

      setContent(contentValue);
    } catch (error) {
      console.error("Fehler beim Abrufen von Inhalten:", error);
    }
  };

  const handleClick = () => {
    setIsMeme(!isMeme); // Um zwischen Meme und Chuck Norris zu wechseln
    const url = isMeme
      ? "https://api.imgflip.com/get_memes"
      : "https://api.chucknorris.io/jokes/random?category=dev";
    fetchRandomContent(url);
  };

  useEffect(() => {

    const initialUrl = "https://api.chucknorris.io/jokes/random?category=dev";
    fetchRandomContent(initialUrl);
  }, []);

  return (
    <>
      <div>
        {isMeme ? <img src={content} alt="Meme" /> : <p>{content}</p>}
      </div>
      <button onClick={handleClick}>Wechseln</button>
    </>
  );
};

export default MemeJokeQuote;
