import React, {useState} from 'react'
import EditableItem from "../editable-item";
import EditingItem from "./editing-item";

const ParagraphWidget = ({widget, editing}) => {
  const [cachedItem, setCashedItem] = useState(widget)
  return (
      <>
      {
        editing &&
         <EditingItem widget = {widget} />
      }
      {
        !editing &&
        <p>
          {widget.text}
        </p>
      }

      </>
  )
}

export default ParagraphWidget