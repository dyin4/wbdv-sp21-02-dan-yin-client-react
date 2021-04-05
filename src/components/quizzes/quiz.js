import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizActions from "../actions/quiz-actions";
import quizService from "../../services/quiz-service"

const Quiz = ({

}) => {
  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])
  let location  = useLocation()
  useEffect(() => {
    quizService.findQuizById(quizId).then((q) => setQuestions(q))
  },[quizId])
  console.log("questions", questions)

  return(
      <div>
        <h3>{location.quizTitle}</h3>
        <ul className="list-group">
        {questions.map(q =>
            <li className="list-group-item">
              <Question q={q}/>
            </li>
        )}
        </ul>
      </div>

  )
}

export default Quiz