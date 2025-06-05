import Desc from "../Desc";
import Title from "../Title";
import Body from "../Body";
import ActionButton from "../ActionButton";
import styled from "styled-components";

enum BodyData {
  Select = "select",
  Text = "text",
  Textarea = "textarea",
}

interface Question {
  title: string;
  desc: string;
  type: BodyData;
  required: boolean;
  option: {
    placeholder: string;
    items: string[];
  };
}

interface QuestionBoxProps {
  Questions: Question;
  questionsLength: number;
  step: number;
  answers: [];
  setAnswers: Function;
}

function QuestionBox(questionBoxProps: QuestionBoxProps) {
  return (
      <AppWrapper>
      <Box>
          <div>
          <Title>{questionBoxProps.Questions.title}</Title>
          <Desc>{questionBoxProps.Questions.desc}</Desc>
          <Body
            type={questionBoxProps.Questions.type}
            answer={questionBoxProps.answers}
            setAnswers={questionBoxProps.setAnswers}
            options={questionBoxProps.Questions.option}
          ></Body>
          <ActionButton
            questionsLength={questionBoxProps.questionsLength}
            step={questionBoxProps.step}
          />
        </div>
    </Box>
    </AppWrapper>

  );
}


const AppWrapper = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #e5e5e5;
`;

const Box =styled.div`
    width : 700px;
    min-height: 500px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    height: 100%;
`;


export default QuestionBox;
