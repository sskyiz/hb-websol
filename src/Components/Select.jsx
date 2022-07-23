import React, { useState, useContext } from "react";
import { GlobalInfo } from "../App";

const InputField = ({ count }) => {
  const { setInput } = useContext(GlobalInfo);
  return (
    <div className="Answer">
      <h3>Option {count + 1}</h3>
      <div className="Answer-input">
        <input
          id="phs"
          type="text"
          placeholder="Placeholder"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

const Select = () => {
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

export default Select;
