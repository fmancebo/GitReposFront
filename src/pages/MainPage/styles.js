import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 20px solid #333;
  border-top-color: #09d;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 0 2rem;
`;

export const SpinnerComponents = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 20px solid #333;
  border-top-color: #09d;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
