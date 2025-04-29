import styled from "styled-components";

const a = 123;

function CompletionPage() {
  return <CompletionPageContainer>CompletionPage</CompletionPageContainer>;
}

// 컴포넌트 안에 자바스크립트 코드를 넣을 수 있다.
const CompletionPageContainer = styled.div`
  background: aqua;
  padding: ${a === 123 ? "4em" : "1em"};
`;

export default CompletionPage;
