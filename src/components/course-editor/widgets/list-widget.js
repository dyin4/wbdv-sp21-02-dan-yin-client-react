import React from 'react'
import EditingItem from "./editing-item";

const ListWidget = ({widget, editing, update, deleteWidget, setWidget}) => {
  return (
      <div>
        {
          editing &&
          <EditingItem widget={widget} update={update}
                       deleteWidget={deleteWidget}
                       setWidget={setWidget}/>

        }
        {
          !editing &&
          <>
            {
              widget.ordered &&
              <ol>
                {
                  widget.text.split("\n").map((item) => {
                    return (
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ol>
            }
            {
              !widget.ordered &&
              <ul>
                {
                  widget.text.split("\n").map((item) => {
                    return (
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ul>
            }
          </>
        }


      </div>

  )
}

export default ListWidget