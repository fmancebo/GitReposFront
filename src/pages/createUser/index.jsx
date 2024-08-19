import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CreateUserContainer,
  CreateUserForm,
  FieldLabel,
  FieldInput,
  Actions,
  ButtonSubmit,
} from "./styles";

import { createUser } from "../../services/api";

function CreateUserPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Mensagem de erro
  const [success, setSuccess] = useState(""); // Mensagem de sucesso
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(fullName, email, password);
      // console.log("Usuário Criado:", response.data);
      setFullName("");
      setEmail("");
      setPassword("");
      setError(""); // Limpa a mensagem de erro
      setSuccess("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 2000); // direciona para depois de 2s
    } catch (err) {
      // Mensagem de erro genérica para todos os casos
      const errorMessage =
        err.response && err.response.data.message
          ? err.response.data.message
          : "Não foi possível criar o usuário.";

      setError(errorMessage);
      // console.error(err.message);
    }
  };

  return (
    <CreateUserContainer>
      <img src='/logo512.png' alt='GitHub Logo' style={{ width: "25%", height: "auto" }} />
      <h1 className='title'>Criar Usuário</h1>
      <CreateUserForm>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <FieldLabel htmlFor='fullName'>Nome Completo:</FieldLabel>
            <FieldInput
              type='text'
              name='fullName'
              id='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <FieldLabel htmlFor='email'>Email:</FieldLabel>
            <FieldInput
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <FieldLabel htmlFor='password'>Senha:</FieldLabel>
            <FieldInput
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
          <Actions>
            <ButtonSubmit type='submit'>Registrar</ButtonSubmit>
          </Actions>
        </form>
      </CreateUserForm>
    </CreateUserContainer>
  );
}

export default CreateUserPage;
