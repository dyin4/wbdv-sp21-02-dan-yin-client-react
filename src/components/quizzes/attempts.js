import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service"
import quizActions from "../actions/quiz-actions";

const choices = ["true", "false"]

const Attempt = ({
  history,
  attempts = [],
  findAttemptsForQuiz

}) => {
  const {quizId} = useParams()
  let location = useLocation()
  useEffect(() => {
    findAttemptsForQuiz(quizId)

  }, [quizId])
  console.log("attempts", attempts)

  return (
      <div>
        <i onClick={() => history.goBack()}
           className="fas fa-times fa-2x float-right"></i>
        <h3>{location.quizTitle} Attempts</h3>
        <ul className="list-group">
          {attempts.map((q, index) =>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-sm-2">
                    <h4>Attempt {index + 1}   </h4>
                  </div>
                  <div className="col-sm-8">

                    {q.answers.map(a => {
                          return (
                              <ul className="list-group">
                                <h3>{a.question}</h3>


                                {a.type === "MULTIPLE_CHOICE" && a.choices.map(choice => {
                                  return (
                                      <li className={`list-group-item ${a.correct
                                      === choice && choice
                                      === a.answer
                                          ? "list-group-item-success"
                                          : (a.answer === choice
                                          && choice
                                          !== a.correct
                                              ? "list-group-item-danger"
                                              : "")}`}>
                                        <label>
                                          <input type="radio" checked={choice
                                          === a.answer}
                                                 disabled={true}/> {choice}
                                        </label>
                                      </li>
                                  )

                                })}

                                {a.type === "TRUE_FALSE" && choices.map(choice =>
                                {return(
                                      <li className={`list-group-item ${a.correct
                                      === choice && choice
                                      === a.answer
                                          ? "list-group-item-success"
                                          : (a.answer === choice
                                          && choice
                                          !== a.correct
                                              ? "list-group-item-danger"
                                              : "")}`}>
                                        <label>
                                          <input type="radio" checked={choice
                                          === a.answer}
                                                 disabled={true}/> {choice}
                                        </label>
                                      </li>
                                  )

                                })}


                              </ul>

                          )
                        }
                    )
                    }
                  </div>
                  <div className="col-sm-2">

                    <h4>Score: {Math.round(q.score * 100) / 100}</h4>
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
