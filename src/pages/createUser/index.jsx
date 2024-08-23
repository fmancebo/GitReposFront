import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BodyLogin,
  Container,
  BoxLogin,
  RegisterHeader,
  InputBox,
  InputField,
  Label,
  BtnRegister,
  LoadingComponents,
  SpinnerComponents,
} from "./styles";

import { createUser } from "../../services/api";

function CreateUserPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Mensagem de erro
  const [success, setSuccess] = useState(""); // Mensagem de sucesso
  const navigate = useNavigate(); // Hook para redirecionamento
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Começa o carregamento

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
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <BodyLogin>
      <Container>
        <form onSubmit={handleSubmit}>
          <BoxLogin>
            <RegisterHeader>
              <span>Cadastro</span>
            </RegisterHeader>
            <InputBox>
              <InputField
                type='text'
                id='fullName'
                name='fullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <Label className='label' htmlFor='fullName'>
                Nome e sobrenome
              </Label>
              <i className='fa-regular fa-user' />
            </InputBox>
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
              <BtnRegister type='submit'>Registrar</BtnRegister>
            )}
            <div>
              {error && <p className='error'>{error}</p>}
              {success && <p className='success'>{success}</p>}
            </div>
          </BoxLogin>
        </form>
      </Container>
    </BodyLogin>
  );
}

export default CreateUserPage;
