import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";
import { LoginContainer, LoginForm, FieldLabel, FieldInput, Actions, ButtonLogin } from "./styles";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // estado para a mensagem de erro

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Email e senha são obrigatórios.");
      return;
    }

    try {
      await login(email, password);
      // console.log("Login realizado com sucesso");
      setErrorMessage(""); // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      // console.error("Erro ao fazer login:", error);
      setErrorMessage("Email ou senha incorretos."); // Define a mensagem de erro em caso de falha
    }
  };

  return (
    <LoginContainer>
      <img className='gitImg' src='/logo512.png' alt='GitHub Logo' />
      <h1 className='title'>Login</h1>
      <LoginForm>
        <div className='field'>
          <FieldLabel htmlFor='email'>Email:</FieldLabel>
          <FieldInput
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <FieldLabel htmlFor='password'>Senha:</FieldLabel>
        <FieldInput
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className='link' to='/register'>
          Novo Usuário
        </Link>

        <Actions>
          <ButtonLogin type='button' onClick={handleLogin}>
            Entrar
          </ButtonLogin>
        </Actions>

        {errorMessage && (
          <div style={{ color: "red", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
            {errorMessage}
          </div>
        )}
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
