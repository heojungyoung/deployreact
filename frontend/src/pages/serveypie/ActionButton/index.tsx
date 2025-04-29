import { useNavigate } from "react-router-dom";

// 매개변수 안에서는 타입을 직접 쓰지 않는다.
// interface나 type으로 Props를 따로 정의하고, 그걸 함수에 타입으로 지정한다

interface ActionButtonsProps {
  questionsLength: number;
  step: number;
}

function ActionButtons({ questionsLength, step }: ActionButtonsProps) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button onClick={() => navigate("/done")}>제출</button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
