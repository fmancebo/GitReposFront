import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import {
  BodyLogin,
  Container,
  BoxLogin,
  LoginHeader,
  InputBox,
  InputField,
  Label,
  BtnLogin,
  BoxRegister,
  LoadingComponents,
  SpinnerComponents,
} from "./styles";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // estado para a mensagem de erro
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Email e senha são obrigatórios.");
      return;
    }

    setLoading(true); // Começa o carregamento

    try {
      await login(email, password);
      // console.log("Login realizado com sucesso");
      setErrorMessage(""); // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      // console.error("Erro ao fazer login:", error);
      setErrorMessage("Email ou senha incorretos."); // Define a mensagem de erro em caso de falha
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <BodyLogin>
      <Container>
        <BoxLogin>
          <LoginHeader>
            <span>Login</span>
          </LoginHeader>
          <InputBox>
            <InputField
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label className='label' htmlFor='email'>
              Email
            </Label>
            <i className='fa-regular fa-envelope' />
          </InputBox>
          <InputBox>
            <InputField
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Label className='label' htmlFor='password'>
              Password
            </Label>
            <i className='fa-solid fa-lock' />
          </InputBox>
          {loading ? (
            <LoadingComponents>
              <SpinnerComponents />
            </LoadingComponents>
          ) : (
            <BtnLogin type='submit' onClick={handleLogin}>
              Login
            </BtnLogin>
          )}
          {errorMessage && (
            <div
              style={{ color: "red", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}
            >
              {errorMessage}
            </div>
          )}
          <BoxRegister>
            <span>Não tem cadastro? </span>
            <Link className='link' to='/register'>
              Registrar
            </Link>
          </BoxRegister>
        </BoxLogin>
      </Container>
    </BodyLogin>
  );
}

export default LoginPage;
