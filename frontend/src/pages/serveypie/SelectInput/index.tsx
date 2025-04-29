interface TextProp {
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

function SelectInput({ answer, setAnswers, options }: TextProp) {
  return (
    <div>
      {options.items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <span>{answer}</span>
      <span onClick={() => setAnswers}></span>
    </div>
  );
}

export default SelectInput;
