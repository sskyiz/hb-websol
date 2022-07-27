import React, { useContext } from "react";
import { GlobalInfo } from "../App";
import "./Answer.css";

const Text = () => {
  const { inputList, setInputList } = useContext(GlobalInfo);

  const handelInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAdd = () => {
    setInputList([...inputList, { Answer: "" }]);
  };
  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <div className="Answer">
            <h3>Option {i + 1}</h3>
            <div className="Answer-input">
              <input
                name="Answer"
                id="ph"
                type="text"
                placeholder="Placeholder"
                onChange={(e) => handelInputChange(e, i)}
              />
              <input
                name="Min"
                type="number"
                placeholder="Min"
                onChange={(e) => handelInputChange(e, i)}
              />
              <input
                name="Max"
                type="number"
                placeholder="Max"
                onChange={(e) => handelInputChange(e, i)}
              />
              <input
                name="Rows"
                type="number"
                placeholder="Rows"
                onChange={(e) => handelInputChange(e, i)}
              />
              {i > 0 && (
                <button className="btn1" onClick={() => handleRemove(i)}>
                  -
                </button>
              )}
            </div>
          </div>
        );
      })}
      <button className="btn2" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Text;
