import React from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({q}) => {
  return(
      <div>
        {q.type === "TRUE_FALSE" &&
        <TrueFalseQuestion q = {q} />}

        {q.type === "MULTIPLE_CHOICE" &&
        <MultipleChoiceQuestion q = {q} />}

      </div>
  )
}
export default Question