import styled from "styled-components";

export const BodyLogin = styled.div`
  background-image: url("https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;

  a {
    text-decoration: none;
    color: var(--second-color);
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const BoxLogin = styled.div`
  position: relative;
  width: 450px;
  color: var(--second-color);
  backdrop-filter: blur(20px);
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  padding: 7.5em 2.5em 4em 2.5em;
  box-shadow: 0px 0px 10px 2px #000000;

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
`;

export const RegisterHeader = styled.div`
  width: 170px;
  height: 70px;
  background-color: var(--primary-color);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;

  span {
    font-size: 30px;
    color: var(--black-color);
  }

  &::before {
    width: 30px;
    height: 30px;
    content: "";
    box-shadow: 15px 0 0 0 var(--primary-color);
    position: absolute;
    top: 0;
    left: -30px;
    border-top-right-radius: 50%;
    background: transparent;
  }

  &::after {
    width: 30px;
    height: 30px;
    content: "";
    box-shadow: -15px 0 0 0 var(--primary-color);
    position: absolute;
    top: 0;
    right: -30px;
    border-top-left-radius: 50%;
    background: transparent;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  i {
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 20px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 55px;
  background: transparent;
  color: var(--second-color);
  font-size: 16px;
  padding-inline: 20px 50px;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  outline: none;

  &:focus + .label,
  &:valid + .label {
    display: flex;
    background-color: var(--primary-color);
    color: var(--black-color);
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 14px;
    border-radius: 30px;
    padding: 0 10px;
  }

  #user {
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 0.2s;
`;

export const BtnRegister = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  width: 75%;
  height: 50px;
  background: #ececec;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
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
