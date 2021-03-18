import React, {useState} from 'react'
import EditableItem from "../editable-item";
import EditingItem from "./editing-item";

const HeadingWidget = ({widget, editing, update}) => {
  const [cachedItem, setCashedItem] = useState({widget})
  console.log("update", cachedItem);
  return (
      <>
        {
          editing && <EditingItem widget = {widget}/>

        }
        {
          !editing &&
          <>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}

          </>
        }

      </>
  )
}

export default HeadingWidget