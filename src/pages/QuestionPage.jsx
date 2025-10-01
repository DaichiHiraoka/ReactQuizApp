import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const.js";
import Display from "../components/Display/Display.jsx";
import Button from "../components/Button/Button.jsx";
import quizData from "../data/data.js";



export default function Question() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigate = useNavigate();
  const MAX_QUIZ_NUM = quizData.length;

  useEffect(() => {
    if (quizIndex === MAX_QUIZ_NUM && answerLogs.length > 0) {
      const correctNum = answerLogs.filter((answer) => answer === true);
      navigate(ROUTES.RESULT, { 
        state: { 
          maxQuizLen: MAX_QUIZ_NUM,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [quizIndex, answerLogs, MAX_QUIZ_NUM, navigate]);

  const handleClick = (clickIndex) => {
    if (clickIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };

  return (
    <>
      <h1>Question </h1>
      {quizData[quizIndex] && <Display >
        {`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
      </Display>}
      {quizData[quizIndex] && <div>
        {quizData[quizIndex].options.map((option, index) => {
          return(
          <Button key={index} onClick={() => handleClick(index)}>{option}</Button>

          ) 
      })
      }</div>}
    </>
  );
}
