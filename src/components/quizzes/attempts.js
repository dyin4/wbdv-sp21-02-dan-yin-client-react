import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service"
import quizActions from "../actions/quiz-actions";

const Attempt = ({history,
  attempts = [],
  findAttemptsForQuiz

}) => {
  const {quizId} = useParams()
  let location  = useLocation()
  useEffect(() => {
    findAttemptsForQuiz(quizId)

  },[quizId])
  console.log("attempts", attempts)

  return(
      <div>
        <i onClick={() => history.goBack()}
           className="fas fa-times fa-2x float-right"></i>
        <h3>{location.quizTitle} Attempts</h3>
        <ul className="list-group">
          {attempts.map((q, index) =>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-sm-6">
                <span>Attempt {index + 1}   </span>
                  </div>
                  <div className="col-sm-6">
                <span>Score: {q.score}</span>
                  </div>
                </div>
              </li>
          )}
        </ul>
      </div>

  )
}

const stateToPropsMapper = (state) => {
  return {
    attempts: state.quizReducer.attempts,

  }
}

const dispatchPropsMapper = (dispatch) => ({
  findAttemptsForQuiz: (qid) => quizActions.findAttemptsForQuiz(dispatch, qid)

})

export default connect(stateToPropsMapper, dispatchPropsMapper)(Attempt)
