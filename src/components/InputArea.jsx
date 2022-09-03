import React, { useState } from "react";
import axios from "axios";
import qs from "qs";


function InputArea(props) {

  const [inputText, setInputText] = useState({
    text: ""
  });
  function handleChange(event) {
    const {name, value} = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitTodo(event){
    const data = qs.stringify({
      text: inputText.text
    });
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    axios.post("http://localhost:5000/", data, headers)
    .then(res => console.log(res.data));

    setInputText({text: ""});
    event.preventDefault();
  }


  return (
    <div className="form">
      <input
      name="text"
      onChange={handleChange}
      value={inputText.text}
      />
      <button onClick={submitTodo}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
