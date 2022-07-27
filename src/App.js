import React, { useState, createContext } from "react";
import "./App.css";
import InputComponent from "./Components/InputComponent";
import { selectData } from "./selectData";

export const GlobalInfo = createContext();

const App = () => {
  const [title, setTitle] = useState("");
  const [answerType, setAnswerType] = useState("");
  const [inputList, setInputList] = useState([
    {
      Answer: "",
      Max: "",
      Min: "",
      Rows: "",
    },
  ]);

  const getData = {
    Question: title,
    Answertype: answerType,
    Answers: inputList,
  };
  const submitData = () => {
    console.log(getData);
    setTitle(null);
    setAnswerType(null);
  };

  return (
    <GlobalInfo.Provider value={{ inputList, setInputList }}>
      <div className="body">
        <div className="Question">
          <h1>Add Question</h1>

          <input
            placeholder="Question Type"
            className="Ques"
            type="text"
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
          {answerType}
        </div>
      </div>
    </GlobalInfo.Provider>
  );
};

export default App;
