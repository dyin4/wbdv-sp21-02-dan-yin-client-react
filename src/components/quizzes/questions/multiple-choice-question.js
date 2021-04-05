import React, {useState} from 'react'

const MultipleChoiceQuestion = ({q}) => {
  const [yourAnswer, setAnswer] = useState("")
  return(
      <div>
        <h4>{q.title}</h4>
        <h5>{q.question}
          {q.correct === yourAnswer && <i className="fa fa-check"></i>}
            {q.correct !== yourAnswer && <i className="fa fa-times"></i>}
          </h5>
        <ul className="list-group">
          {
            q.choices.map((choice) => {
              return(
                  <li className={`list-group-item ${q.correct === yourAnswer ? 'list-group-item-success' : 'list-group-item-danger'} `}>
                    <label>
                      <input type = "radio" name = {q._id} onClick={() => setAnswer(choice)}/> {choice}</label>
                  </li>
              )
            })
          }
        </ul>
        <p>Your answer is : {yourAnswer}</p>

      </div>
  )
}
export default MultipleChoiceQuestion