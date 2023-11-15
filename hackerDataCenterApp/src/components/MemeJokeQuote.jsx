import { useState, useEffect } from "react";

const MemeJokeQuote = () => {
  const [content, setContent] = useState("");
  const [isMeme, setIsMeme] = useState(false);
  
  useEffect(() => {
    const url = isMeme
    ? "https://api.imgflip.com/get_memes"
    : "https://api.chucknorris.io/jokes/random?category=dev";
    const fetchRandomContent = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        const randomNum = Math.floor(Math.random() * 99) ;
        console.log(randomNum);
        const contentValue = isMeme ? data.data.memes[randomNum].url : data.value;
  
        setContent(contentValue);
      } catch (error) {
        console.error("Fehler beim Abrufen von Inhalten:", error);
      }
    };
    fetchRandomContent(url); setContent("")
  }, [isMeme]);



  return (
    <>
      <div>
        {content && isMeme ? <img src={content} alt="Meme" /> : <p>{content}</p>}
      </div>
      <button onClick={() => setIsMeme(!isMeme)}>Wechseln</button>
      
    </>
  );
};

export default MemeJokeQuote;
