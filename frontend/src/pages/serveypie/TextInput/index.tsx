import styled from "styled-components";

interface TextProp {
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

function TextInput({ answer, setAnswers, options }: TextProp) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 18px;
  line-height: 21px;
`;

export default TextInput;
