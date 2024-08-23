import styled from "styled-components";

export const BodyMainPage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1683384546413-d207b5677dc0?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Container = styled.div`
  min-height: 100%;
  flex-direction: column;
  width: 100%;
  background-color: #00000033;
  justify-content: center;
  align-items: center;
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
