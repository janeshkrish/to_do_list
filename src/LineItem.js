import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
                    <input
                      type=  "checkbox"
                      onChange={() => handleCheck(item.id)}
                      checked= {item.checked}
                    />
                    <label 
                    style={item.checked ? {textDecoration: "line-through"} : null}
                    onDoubleClick={() => handleCheck(item.id)}>
                        {item.items}</label>
                    <FaTrash 
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete ${item.items}`}
                        onClick={() => handleDelete(item.id)}
                    />
                    </li>
  )
}

export default LineItem