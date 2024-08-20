import styled from "styled-components";

export const CreateUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1e21;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;

  .gitImg {
    width: 25%;
    height: auto;
  }

  .error {
    color: red;
    background-color: #fdd;
    border: 1px solid red;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
  }

  .success {
    color: green;
    background-color: #dfd;
    border: 1px solid green;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
  }

  .title {
    color: white;
  }

  @media screen and (max-width: 600px) {
    .gitImg {
      width: 50%;
      height: auto;
    }
  }
`;

export const CreateUserForm = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 380px;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const FieldLabel = styled.label`
  display: block;
  margin: 5px;
  font-size: 1.5rem;
`;

export const FieldInput = styled.input`
  width: 100%;
  line-height: 2rem;
  background-color: #ecf0f1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  background-color: #1d1e21;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  color: #ffff;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(200%);
  }
`;
