import React from "react";
import styled from "styled-components";

interface TextProp {
  answer: any[];
  setAnswers: Function;
  options: {
    placeholder: string;
    items: string[];
  };
}

interface ItemProps {
  children: React.ReactNode;
  onChange?: (e: any) => void; // if you really need onChange, you can do this instead
}

function Item({ children, onChange }: ItemProps) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswers, options }: TextProp) {
  const handleChange = (isChecked: any, index: any) => {
    console.log("answer :", answer, index, isChecked);
    if (isChecked) {
      // setAnswers (index 추가)
      setAnswers([...answer, index]);
    } else {
      // setAnswers (index 빼기)
      setAnswers(answer.filter((i: any) => i !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => (
        <Item
          key={index}
          onChange={(e: any) => {
            handleChange(e.target.checked, index);
          }}
        >
          {item}
        </Item>
      ))}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

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
