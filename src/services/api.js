import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const api = axios.create({
  baseURL,
});

// CRIAR USUARIO
export const createUser = async (fullName, email, password) =>
  api.post("/users", { fullName, email, password });

// SESSION
export const createSession = async (email, password) => api.post("/sessions", { email, password });

// BUSCAR REPOSITORIOS
export const getRepositories = async (userId, query) => {
  let url = `/user/${userId}/repositories/`;

  if (query !== "") {
    url += `?q=${query}`;
  }

  // console.log("query", url);

  return api.get(url);
};

// NOMEAR REPOSITORIOS
const getRepositoryName = (url) => {
  // Regex para capturar o caminho do repositório
  const regex = /https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)/;

  const match = url.match(regex);

  if (match) {
    // match[1] é o owner e match[2] é o nome do repositório
    return `${match[1]}/${match[2]}`;
  }

  // Retorna um valor padrão ou lança um erro se a URL não for válida
  return "invalid/repository";
};

// CRIAR REPOSITORIOS
export const createRepository = async (userId, repositoryUrl) => {
  const repositoryName = getRepositoryName(repositoryUrl);
  const url = `/user/${userId}/repositories/`;

  return api.post(url, { name: repositoryName, url: repositoryUrl });
};

export const destroyRepository = async (userId, id) => {
  const url = `/user/${userId}/repositories/${id}`;
  return api.delete(url);
};
