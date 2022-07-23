import React, { useState, useContext } from "react";
import { GlobalInfo } from "../App";
import "./Answer.css";

const InputField = ({ count }) => {
  const { setInput, setMin, setMax, setRow } = useContext(GlobalInfo);
  return (
    <div className="Answer">
      <h3>Option {count + 1}</h3>
      <div className="Answer-input">
        <input
          id="ph"
          type="text"
          placeholder="Placeholder"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          onChange={(e) => setMax(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rows"
          onChange={(e) => setRow(e.target.value)}
        />
      </div>
    </div>
  );
};
const Text = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {[...Array(count)].map((e, i) => (
        <InputField count={i} />
      ))}
      <InputField count={count} />
      <div className="btns">
        {count > 0 ? (
          <button className="btn1" onClick={() => setCount(count - 1)}>
            -
          </button>
        ) : null}
        <button className="btn2" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Text;
