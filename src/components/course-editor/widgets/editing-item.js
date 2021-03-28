import React, {useState} from 'react'
import "../../../index.css"

const EditingItem = ({widget, update, deleteWidget, setWidget}) => {
  const [cachedItem, setCashedItem] = useState(widget)
  console.log("cachedItem", cachedItem)
  return (
      <div className="row">

        <div className="col-sm-10">

          <select className="form-control" value={cachedItem.type}
                  onChange={(e) => {
                    setCashedItem({...cachedItem, type: e.target.value})
                  }
                  }
          >
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
            <option value="LIST">List</option>
            <option value="IMAGE">Image</option>
          </select>
          {
            cachedItem.type === "HEADING" &&
            <>
              <input className="form-control" value={cachedItem.text}
                     onChange={(e) => setCashedItem(
                         {...cachedItem, text: e.target.value})}/>

              <select className="form-control" value={cachedItem.size}
                      onChange={(e) => setCashedItem(
                          {...cachedItem, size: e.target.value})}>
                <option value={1}>Heading 1</option>
                <option value={2}>Heading 2</option>
                <option value={3}>Heading 3</option>
                <option value={4}>Heading 4</option>
                <option value={5}>Heading 5</option>
                <option value={6}>Heading 6</option>

              </select>
            </>

          }

          {
            cachedItem.type === "PARAGRAPH" &&
            <>
           <textarea className="form-control" value={cachedItem.text}
                     onChange={(e) => setCashedItem(
                         {...cachedItem, text: e.target.value})}>
      </textarea>
            </>

          }

          {
            cachedItem.type === "LIST" &&
            <>
              <input checked={widget.ordered} type="checkbox"
                     onChange={(e) => setCashedItem(
                         {...cachedItem, ordered: e.target.checked})}/> Ordered
              <br/>
              <textarea className="form-control" value={cachedItem.text}
                        onChange={(e) => setCashedItem(
                            {...cachedItem, text: e.target.value})}>
      </textarea>
            </>

          }

          {
            cachedItem.type === "IMAGE" &&
            <>
              <label className="form-check-label">Image URL
              </label>
                <input value={widget.url} className="form-control"
                       onChange={(e) => setCashedItem(
                           {...cachedItem, url: e.target.value})}/>

              <label className="form-check-label">Image width</label>

              <input value={widget.width} className="form-control"
                     onChange={(e) => setCashedItem(
                         {...cachedItem, width: e.target.value})}/>

              <label className="form-check-label">Image height</label>
              <input value={widget.height} className="form-control"
                     onChange={(e) => setCashedItem(
                         {...cachedItem, height: e.target.value})}/>

            </>

          }
        </div>

        <div className="col-sm-2">
          <i className="fas fa-2x fa-check float-right" onClick={() => {
            update(widget.id, cachedItem)
            setWidget({})
          }}></i>
          <i className="fas fa-2x fa-trash float-right" onClick={() => {
            deleteWidget(widget.id)
          }}></i>
        </div>

      </div>
  )
}

export default EditingItem