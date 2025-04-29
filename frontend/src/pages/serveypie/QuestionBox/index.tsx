import Desc from "../Desc";
import Title from "../Title";
import Body from "../Body";
import ActionButton from "../ActionButton";

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
  );
}
export default QuestionBox;
