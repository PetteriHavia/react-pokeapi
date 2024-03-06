import styled from "styled-components";

const Loading = () => {
  return (
    <LoadContainer>
      <Spinner></Spinner>
    </LoadContainer>
  );
};

const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const Spinner = styled.div`
  width: 10px;
  height: 50px;
  border: 25px solid;
  border-color: #d84242 transparent #d84242 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
