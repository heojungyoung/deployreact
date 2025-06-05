import ProgressIndicator from "../../ProgressIndicator";
import QuestionBox from "../../QuestionBox";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function SurveyPage() {
  const params = useParams();
  console.log(typeof params.step);
  console.log(params.surveyId);
  enum BodyData {
    Select = "select",
    Text = "text",
    Textarea = "textarea",
  }

  const questions = [
    {
      title: "질문 1입니다.",
      desc: "설명 1입니다.",
      type: BodyData.Select,
      required: false,
      option: {
        placeholder: "placeholder 1 입니다.",
        items: ["답변1", "답변2", "답변3", "답변4", "답변5"],
      },
    },
    {
      title: "질문 2입니다.",
      desc: "설명 2입니다.",
      type: BodyData.Text,
      required: true,
      option: {
        placeholder: "placeholder 2 입니다.",
        items: [],
      },
    },
    {
      title: "질문 3입니다.",
      desc: "설명 3입니다.",
      type: BodyData.Textarea,
      required: false,
      option: {
        placeholder: "placeholder 3 입니다.",
        items: [],
      },
    },
  ];

  const step = parseInt(params.step ?? "0", 10);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox
        Questions={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswers={(newAnswer: any) => {
          setAnswers((answers) => {
            const newAnswers: any = [...answers];
            console.log("old  " + answers);
            newAnswers[step] = newAnswer;
            console.log("step  " + step);
            console.log(newAnswers[step]);
            console.log("new array");
            console.log(newAnswers);
            return newAnswers;
          });
        }}
        // prevAnswers는 업데이트 직전의 배열 상태입니다.
        // 스프레드 연산자([...])로 얕은 복사(shallow copy)를 만들고,
        // step 인덱스 위치에 들어올 새 답변을 할당한 뒤
        // 복사한 배열 전체를 리턴합니다.
      />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
   width: 100%;
   min-height: 100%;
`;

export default SurveyPage;
