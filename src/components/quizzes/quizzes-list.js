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
        <ul>{
          quizzes.map(q =>
          <li>
            <Link to={`/courses/${courseId}/quizzes/${q._id}`}>{q.title}</Link>

          </li>)

        }</ul>


      </div>
  )
}
export default QuizzesList