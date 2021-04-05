import React from 'react'

const TrueFalseQuestion = ({q}) => {
  return(
      <div>
        <h5>{q.question}</h5>
        <label >
        <input className="control-form" type = "radio" name = {q._id}/> True</label>
        <label>
        <input type = "radio" name = {q._id}/> False</label>
      </div>
  )
}
export default TrueFalseQuestion