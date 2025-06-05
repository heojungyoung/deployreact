import TextInput from "../TextInput";
import React from "react";
import TextAreaInput from "../TextAreaInput";
import SelectInput from "../SelectInput";
import styled from "styled-components";

enum BodyData {
  Select = "select",
  Text = "text",
  Textarea = "textarea",
}

interface BodyProp {
  type: BodyData;
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

interface TypeProp {
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

function Body({ type, answer, setAnswers, options }: BodyProp) {
  let InputComponent: React.FC<TypeProp> | null = null;

  if (type === "select") {
    InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    InputComponent = TextAreaInput;
  }

  if (!InputComponent) {
    return null;
  }

  return (
    <BodyWrapper>
      <InputComponent
        answer={answer}
        setAnswers={setAnswers}
        options={options}
      />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin-left: 38px;
  flex : 1;
`;

export default Body;
