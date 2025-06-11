import { useState } from "react";

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSubmit = (e) => {
    setText("");
    setTyping(true);
    e.preventDefault();

    const data = new FormData(e.target);
    const sentence = data.get("sentence").trim();

    function type(i = 0) {
      if (i < sentence.length) {
        setText(prev => prev + sentence[i]);
        setTimeout(() => type(i + 1), 500);
      } else {
        setTyping(false);
      }
    }

    type();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="sentence"
          placeholder="Type a sentence"
          style={{ width: "300px" }}
          disabled={typing}
        />
        <button type="submit" disabled={typing}>
          Display with typewriter effect
        </button>
      </form>
      <div>
        <h3>
          {text.length > 0 ? "You typed " : ""}
          {text}
        </h3>
      </div>
    </div>
  );
};

export default TypewriterEffect;
