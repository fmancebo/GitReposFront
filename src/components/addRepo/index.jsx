import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  LoadingComponents,
  SpinnerComponents,
  AddRepoContainer,
  Label,
  RepoInput,
  AddButton,
  ErrorMessage,
} from "./styles";
// onAddRepo vindo do main
function AddRepo({ onAddRepo }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddRepo = async (e) => {
    e.preventDefault();

    if (repoUrl.trim() === "") {
      setError("A URL do repositório não pode estar vazia.");
      return;
    }

    setLoading(true);
    setError(""); // Limpa o erro antes de começar

    try {
      await onAddRepo(repoUrl); // Aguarda a conclusão da função assíncrona
      setRepoUrl(""); // Limpa o campo de entrada após a adição
    } catch (err) {
      setError("Ocorreu um erro ao adicionar o repositório."); // Mensagem de erro genérica
    } finally {
      setLoading(false); // Garante que o carregamento seja finalizado
    }
  };

  const handleChange = (e) => {
    setRepoUrl(e.target.value);
  };

  return (
    <AddRepoContainer>
      <Label htmlFor='new-repo'>Novo Repo:</Label>
      <RepoInput
        type='url'
        name='new-repo'
        id='new-repo'
        placeholder='Digite a URL do repositório'
        value={repoUrl}
        onChange={handleChange}
        required
      />
      {loading ? (
        <LoadingComponents>
          <SpinnerComponents />
        </LoadingComponents>
      ) : (
        <AddButton type='submit' onClick={handleAddRepo}>
          Adicionar
        </AddButton>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AddRepoContainer>
  );
}

AddRepo.propTypes = {
  onAddRepo: PropTypes.func.isRequired,
};

export default AddRepo;
