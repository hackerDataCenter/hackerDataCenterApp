import { useEffect, useRef, useState } from "react";
import './chatBot.css';
// import '../components/chatBot.css'

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (message) => {
    setMessages([...messages, { user: "You", text: message }]);
    
    // Prepare the URL and parameters
    const url = new URL("https://www.botlibre.com/rest/api/form-chat");
    url.search = new URLSearchParams({
      application: "5293649029735316214",
      instance: "35225548",
      message: message,
    });
    
    try {
      // Send a request to the Bot Libre API
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      // Parse the response
      const responseText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(responseText, "text/xml");
    
      // Extract the message from the XML document
      const botMessage = xmlDoc.getElementsByTagName("message")[0].textContent;
    
      // Add the bot's response to the messages
      setMessages((prevMessages) => [...prevMessages, { user: "Bot", text: botMessage }]);
    } catch (err) {
      console.error("There was an error with the fetch operation: ", err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chatBot">
      <div className="messages">
        {messages.map((message, index) => (
          <p id="message" key={index}>
            <strong>{message.user}:</strong> {message.text}
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ChatBot;