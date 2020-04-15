import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

const App = () => {

  const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      question: "what is 2 + 2 ?",
      answer: '4',
      options: ["2", "3", "4", "5"],
    },
    {
      id: 2,
      question: "what is 20 + 20 ?",
      answer: '40',
      options: ["20", "30", "40", "50"],
    },
    {
      id: 3,
      answer: '400',
      question: "what is 200 + 200 ?",
      options: ["200", "300", "400", "500"],
    },
  ];

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );

}

export default App;
