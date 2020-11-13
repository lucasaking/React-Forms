import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

function Boxlist() {
  let [ boxes, setBoxes ] = useState([]);

  function getFeatures({height, width, color}) {
    let newBox = {
      height,
      width,
      color,
      id: uuid()   
    }
    setBoxes(boxes => [...boxes, newBox]);
  }

  function handleClick(evt){
    let { id } = evt.target;
    let delBox = (boxes.filter(box => box.id === id))[0];
    setBoxes(boxes => [...boxes.filter(box => box !== delBox)]);   
  }

  return (
    <div>
      <NewBoxForm getFeatures={ getFeatures }/>
      <ul>
        {boxes.map(box => <Box key={box.id} box={box} handleClick={handleClick} />)}
      </ul>
    </div>
  );
}

export default Boxlist;