import React, { useState } from "react";

function NewBoxForm({ getFeatures }) {

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    getFeatures(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">height:</label>
      <input name="height" 
        onChange={handleChange}
        value={formData.height}/>
      <label htmlFor="width">width:</label>
      <input name="width"
        onChange={handleChange} 
        value={formData.width}/>
      <label htmlFor="color">color:</label>
      <input name="color" 
        onChange={handleChange}
        value={formData.color}/>
      <button>add a new box</button>
    </form>
  )
}

export default NewBoxForm;