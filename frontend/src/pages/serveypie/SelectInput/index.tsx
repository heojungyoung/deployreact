import { ReactNode } from "react";
import styled from "styled-components";

interface TextProp {
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

function Item({ children }: { children: ReactNode }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer, setAnswers, options }: TextProp) {
  return (
    <div>
      {options.items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
      <span>{answer}</span>
      <span onClick={() => setAnswers}></span>
    </div>
  );
}

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
  }

  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
  }

  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
