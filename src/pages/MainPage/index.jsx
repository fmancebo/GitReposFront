import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { Loading, Spinner, BodyMainPage, Container } from "./styles";
import NavBar from "../../components/navBar";
import Search from "../../components/search";
import Repository from "../../components/repositories";
import AddRepo from "../../components/addRepo";
import { getRepositories, createRepository, destroyRepository } from "../../services/api";

export default function MainPage() {
  const { user, logout } = useContext(AuthContext); // Desestruturando user e logout do AuthContext
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState({}); // Estado para controlar o loading de cada repositório
  const userId = user?.id; // ID do usuário do AuthContext

  // Função para carregar os repositórios
  const loadData = useCallback(
    async (searchQuery = "") => {
      try {
        const response = await getRepositories(userId, searchQuery, user.password);
        setRepositories(response.data);
        setLoading(false);
      } catch (error) {
        // console.error("Erro ao carregar repositórios:", error);
        setLoadingError(true);
      }
    },
    [userId, user.password],
  );

  // Chama a função loadData quando o componente é montado
  useEffect(() => {
    loadData();
  }, [userId, loadData]); // Adiciona userId e o loadData como dependência para garantir que a função seja chamada com o ID correto

  // Função para lidar com a pesquisa
  const handleSearch = (searchQuery) => {
    loadData(searchQuery);
  };

  const handleClearSearch = () => {
    setQuery("");
    loadData("");
  };

  const handleAddRepo = async (repoUrl) => {
    try {
      // Função para verificar se o repositório já existe
      const repoExists = (url) => repositories.some((repo) => repo.url === url);

      // Verifica se o repositório já existe
      if (repoExists(repoUrl)) {
        // eslint-disable-next-line no-alert
        alert("Este repositório já foi adicionado.");
        return;
      }

      // Adiciona o repositório se não existir
      await createRepository(userId, repoUrl, user.password); // Passe a senha do usuário
      loadData(); // Atualiza os dados após a adição
    } catch (err) {
      // console.error(err);
      setLoadingError(true); // Define o erro de carregamento
    }
  };

  // Função para deletar repositório
  const handleDeleteRepo = async (repository) => {
    setDeleteLoading((prev) => ({ ...prev, [repository._id]: true })); // Define o loading para o repositório específico
    try {
      await destroyRepository(userId, repository._id, user.password); // Passe a senha do usuário
      loadData();
    } catch (err) {
      // console.error(err);
      setLoadingError(true);
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [repository._id]: false })); // Desativa o loading
    }
  };

  // Função para desconectar
  const handleLogout = () => {
    logout(); // Chama a função logout do AuthContext
  };

  if (loading) {
    return (
      <Loading>
        <Spinner />
      </Loading>
    );
  }

  if (loadingError) {
    return (
      <Loading>
        Erro ao carregar os dados de repositório. <Link to='/login'>Voltar</Link>.
      </Loading>
    );
  }

  return (
    <BodyMainPage>
      <Container>
        <NavBar logout={handleLogout} />
        <Search query={query} onSearch={handleSearch} onClear={handleClearSearch} />
        <Repository
          repositories={repositories}
          onDeleteRepo={handleDeleteRepo}
          deleteLoading={deleteLoading}
        />
        <AddRepo onAddRepo={handleAddRepo} />
      </Container>
    </BodyMainPage>
  );
}
