interface TextProp {
  answer: any[];
  setAnswers: Function;
}

function TextInput({ answer, setAnswers }: TextProp) {
  return (
    <input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    />
  );
}

export default TextInput;
