import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textArea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      question: "what is 2 + 2 ?",
      answer: "4",
      options: ["2", "3", "4", "5"],
    },
    {
      id: 2,
      question: "what is 20 + 20 ?",
      answer: "40",
      options: ["20", "30", "40", "50"],
    },
    {
      id: 3,
      answer: "400",
      question: "what is 200 + 200 ?",
      options: ["200", "300", "400", "500"],
    },
  ];

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div className='container'>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;
