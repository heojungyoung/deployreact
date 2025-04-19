import TextInput from "../TextInput";
import React from "react";

enum BodyData {
  Select = "select",
  Text = "text",
  Textarea = "textarea",
}

interface BodyProp {
  type: BodyData;
  answer: any[];
  setAnswers: Function;
}

interface TextProp {
  answer: any[];
  setAnswers: Function;
}

function Body({ type, answer, setAnswers }: BodyProp) {
  let InputComponent: React.FC<TextProp> | null = null;

  if (type === "select") {
    // InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
  }

  if (!InputComponent) {
    return null;
  }

  return (
    <>
      <InputComponent answer={answer} setAnswers={setAnswers} />
    </>
  );
}

export default Body;
