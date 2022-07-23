import React from "react";
import Number from "./Number";
import Select from "./Select";
import Text from "./Text";

const InputComponent = ({ answerType }) => {
  if (answerType === "none") {
    return null;
  } else if (answerType === "text" || answerType === "textarea") {
    return <Text />;
  } else if (answerType === "number" || answerType === "slider") {
    return <Number />;
  }
  if (
    answerType === "select" ||
    answerType === "radio" ||
    answerType === "checkbox"
  ) {
    return <Select />;
  }
  return null;
};

export default InputComponent;
