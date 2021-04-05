import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizActions from "../actions/quiz-actions";
import quizService from "../../services/quiz-service"

const Quiz = ({

}) => {
  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    quizService.findQuizById(quizId).then((q) => setQuestions(q))
  },[quizId])
  console.log("questions", questions)

  return(
      <div>
        <h3>Quiz {quizId}</h3>
        <ul>
        {questions.map(q =>
            <li>
              <Question q={q}/>
            </li>
        )}
        </ul>
      </div>

  )
}

export default Quiz