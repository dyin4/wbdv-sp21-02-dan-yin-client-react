import React, {useState} from 'react'

const MultipleChoiceQuestion = ({q}) => {
  const [yourAnswer, setAnswer] = useState("")
  const [graded, setGraded] = useState(false)
  const handleClick = () =>{
    setGraded(true)
  }
  console.log("graded", graded)
  return(
      <div className="container">
        <h4>{q.question}{" "}
          {graded && q.correct === yourAnswer && <i className="fa fa-check"></i>}
            {graded && q.correct !== yourAnswer && <i className="fa fa-times"></i>}
          </h4>
        <ul className="list-group">
          {
            q.choices.map((choice) => {
              return(
                  <li className={`list-group-item ${ !graded? "" : (choice === q.correct ? 'list-group-item-success' : (yourAnswer === choice ? 'list-group-item-danger' : ""))} `}>
                    <label>
                      <input type = "radio" name = {q._id} onClick={() => setAnswer(choice)} disabled={graded}/> {choice}</label>
                    {graded && q.correct === choice && <i className="fa fa-check float-right"></i>}
                    {graded && q.correct !== yourAnswer && q.correct !== choice && choice === yourAnswer  && <i className="fa fa-times float-right"></i>}
                  </li>
              )
            })
          }
        </ul>
        <p>Your answer is : {yourAnswer}</p>
        <button className="btn btn-success" onClick={handleClick}>Grade</button>

      </div>
  )
}
export default MultipleChoiceQuestion