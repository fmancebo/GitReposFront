import styled from "styled-components";

export const AddRepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const RepoInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

export const LoadingComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const SpinnerComponents = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid rgba(51, 51, 51, 0.2);
  border-top-color: #09d;
  animation: spin 0.8s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
