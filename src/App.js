import React, { useState, createContext } from "react";
import "./App.css";
import InputComponent from "./Components/InputComponent";

export const GlobalInfo = createContext();

const App = () => {
  const [title, setTitle] = useState("");
  const [answerType, setAnswerType] = useState(null);
  const [input, setInput] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [row, setRow] = useState("");

  const getData = {
    Question: title,
    Answertype: answerType,
    Answer: [
      {
        Answer: input,
        Min: min,
        Max: max,
        Rows: row,
      },
    ],
  };
  const submitData = () => {
    console.log(getData);
    setAnswerType(null);
  };

  const selectData = [
    { value: "none", label: "None" },
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "select", label: "Select" },
    { value: "textarea", label: "Text Area" },
    { value: "radio", label: "Radio" },
    { value: "checkbox", label: "Checkbox" },
    { value: "slider", label: "Slider" },
  ];

  return (
    <GlobalInfo.Provider value={{ setInput, setMin, setMax, setRow }}>
      <div className="body">
        <div className="Question">
          <h1>Add Question</h1>
          <input
            className="Ques"
            type="text"
            placeholder="Question Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <select id="select" onChange={(e) => setAnswerType(e.target.value)}>
            <option value="" disabled selected hidden>
              Answer Type
            </option>
            {selectData.map((item, i) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
          <div>
            <InputComponent answerType={answerType} />
          </div>
          <button className="btn" onClick={submitData}>
            Submit
          </button>
        </div>
      </div>
    </GlobalInfo.Provider>
  );
};

export default App;
