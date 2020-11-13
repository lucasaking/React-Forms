import React from "react";

function Box({ box, handleClick }) {
  const {height, width, color, id} = box;
  const data = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: color
  }

  return (
    <li>
      <div className="box" style={data}></div> 
      <button onClick={handleClick} id={id}> delete me </button>
    </li>
  )
}

export default Box;