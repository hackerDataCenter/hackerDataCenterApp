import {useState, useEffect } from "react";

const MemeJokeQuote = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    //Abrufen eines zufälligen Chuck Norris witz von einer API
    const fetchRandomContent = async () => {
      try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Fehler beim Abrufen von Inhalten:", error);
      }
    };

    // Aufruf der API beim laden der Komponente
    fetchRandomContent();
  }, []);
  return (
    <>
      <p>{content}</p>
    </>
  );
};

export default MemeJokeQuote;