import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 425px) {
    gap: 0.25rem;
  }
`;

export const SearchLabel = styled.label`
  font-size: 1rem;
  margin-right: 0.5rem;

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  max-width: 425px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  @media screen and (max-width: 425px) {
    padding: 0.5rem 0.25rem;
  }
`;
