import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service"
import quizActions from "../actions/quiz-actions";

const Quiz = ({questions = [],
  findQuestionsForQuiz,
  submitQuiz,
    score = 0


}) => {
  const {quizId} = useParams()
  //const [questions, setQuestions] = useState([])
  let location  = useLocation()
  useEffect(() => {
    findQuestionsForQuiz(quizId)
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
        <button className="btn btn-primary" onClick={() => {
          submitQuiz(quizId,questions)
        }}>Submit</button>
        <h1>{score}</h1>
      </div>

  )
}

const stateToPropsMapper = (state) => {
  return {
    questions: state.quizReducer.questions,
    score:state.quizReducer.score
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findQuestionsForQuiz: (qid) => quizActions.findQuestionsForQuiz(dispatch, qid),
  submitQuiz: (qid, questions) => quizActions.submitQuiz(dispatch, qid, questions),

})

export default connect(stateToPropsMapper, dispatchPropsMapper)(Quiz)
