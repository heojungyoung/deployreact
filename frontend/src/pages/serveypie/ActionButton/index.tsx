// 매개변수 안에서는 타입을 직접 쓰지 않는다.
// interface나 type으로 Props를 따로 정의하고, 그걸 함수에 타입으로 지정한다

interface ActionButtonsProps {
  questionsLength: number;
  step: number;
}

function ActionButtons({ questionsLength, step }: ActionButtonsProps) {
  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {step === 0 || <button>이전</button>}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ActionButtons;
