import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  max-width: 480px;
  margin: 1rem auto;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  margin: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 0.5rem;
  border: 1px solid #1d1e21;
  margin-bottom: 5px;
  transition: 0.2s ease;

  &:hover {
    scale: calc(101%);
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Owner = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const Name = styled.div`
  font-size: 1.3rem;
  color: #555;
`;

export const DeleteButton = styled.button`
  padding: 0.3rem 0.7rem;
  border: none;
  border-radius: 3px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
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
  border-top-color: #d32f2f;
  animation: spin 0.8s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
