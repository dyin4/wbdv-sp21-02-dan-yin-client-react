import React, {useState} from 'react'
import EditableItem from "../editable-item";

const EditingItem = ({widget}) => {
  const [cachedItem, setCashedItem] = useState(widget)
  return (
      <>
        <select className="form-control" value={cachedItem.type}
                onChange={(e) => {
                  setCashedItem({...widget, type: e.target.value})
                }
                }
        >
          <option value="HEADING">Heading</option>
          <option value="PARAGRAPH">Paragraph</option>
        </select>
        {
          cachedItem.type === "HEADING" &&
          <>
            <input className="form-control" value={widget.text}/>

            <select className="form-control" value={widget.size}>
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>

            </select>
          </>

        }

        {
          cachedItem.type === "PARAGRAPH" &&
          <>
           <textarea className="form-control" value={widget.text}>
      </textarea>
          </>

        }

      </>
  )
}

export default EditingItem