import React , {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"


const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([])
  const {courseId} = useParams()

  useEffect(() => {
    quizService.findAllQuizzes()
    .then((quizzes) => setQuizzes(quizzes))
  }, [])
  console.log("quizzes", quizzes)
  return(
      <div>
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
          </li>)

        }</ul>


      </div>
  )
}
export default QuizzesList