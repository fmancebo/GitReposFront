import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddRepoContainer, Label, RepoInput, AddButton, ErrorMessage } from "./styles";
// onAddRepo vindo do main
function AddRepo({ onAddRepo }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [error, setError] = useState("");

  const handleAddRepo = (e) => {
    e.preventDefault();

    // Verifica se o campo está vazio
    if (repoUrl.trim() === "") {
      setError("A URL do repositório não pode estar vazia.");
      return;
    }

    onAddRepo(repoUrl); // Chama a função passada como prop
    setRepoUrl("");
    setError("");
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
      <AddButton type='submit' onClick={handleAddRepo}>
        Adicionar
      </AddButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AddRepoContainer>
  );
}

AddRepo.propTypes = {
  onAddRepo: PropTypes.func.isRequired,
};

export default AddRepo;
