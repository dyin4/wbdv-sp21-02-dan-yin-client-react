import React , {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"


const QuizzesList = ({history}) => {
  const [quizzes, setQuizzes] = useState([])
  const {courseId} = useParams()

  useEffect(() => {
    quizService.findAllQuizzes()
    .then((quizzes) => setQuizzes(quizzes))
  }, [])
  console.log("quizzes", quizzes)
  return(
      <div>
        <i onClick={() => history.goBack()}
           className="fas fa-times fa-2x float-right"></i>
        <h2>Quizzes</h2>

        <ul className="list-group">{
          quizzes.map(q =>
          <li className="list-group-item">
            <Link to={{
              pathname: `/courses/${courseId}/quizzes/${q._id}`,
            quizTitle:q.title}}>
              {q.title}
              <button className="btn btn-primary float-right">start</button>
            </Link>
            <Link to={{
              pathname: `/courses/${courseId}/quizzes/${q._id}/attempts`,
              quizTitle:q.title}}>
            <button className="btn btn-primary attempts-btn">Attempts</button>
            </Link>
          </li>)

        }</ul>


      </div>
  )
}
export default QuizzesList