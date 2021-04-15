import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service"
import quizActions from "../actions/quiz-actions";

const Quiz = ({history, questions = [],
  findQuestionsForQuiz,
  submitQuiz,
    score = 0,
    clearGrade,
    grade,
    graded

}) => {
  const {quizId} = useParams()
  //const [questions, setQuestions] = useState([])
  let location  = useLocation()
  useEffect(() => {
    findQuestionsForQuiz(quizId)
    clearGrade()

  },[quizId])
  console.log("questions", questions)
  console.log("grade", graded)

  return(
      <div>
        <i onClick={() => history.goBack()}
           className="fas fa-times fa-2x float-right"></i>
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
          grade()
        }}>Submit</button>
        {graded && <h1>Your score is : {score}</h1>}
      </div>

  )
}

const stateToPropsMapper = (state) => {
  return {
    questions: state.quizReducer.questions,
    score:state.quizReducer.score,
    graded:state.quizReducer.grade
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findQuestionsForQuiz: (qid) => quizActions.findQuestionsForQuiz(dispatch, qid),
  submitQuiz: (qid, questions) => quizActions.submitQuiz(dispatch, qid, questions),
  clearGrade:() => quizActions.clearGrade(dispatch),
  grade:() => quizActions.grade(dispatch)

})

export default connect(stateToPropsMapper, dispatchPropsMapper)(Quiz)
