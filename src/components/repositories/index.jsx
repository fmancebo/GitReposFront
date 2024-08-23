import React from "react";
import PropTypes from "prop-types";
import {
  RepositoriesContainer,
  Title,
  List,
  ListItem,
  Info,
  Owner,
  Name,
  DeleteButton,
  LoadingComponents,
  SpinnerComponents,
} from "./styles";

function Repository({ repositories, onDeleteRepo, deleteLoading }) {
  return (
    <RepositoriesContainer>
      <Title>Repositórios</Title>
      <List>
        {repositories.map((repository) => (
          <ListItem key={repository._id}>
            <Info>
              <Owner>{repository.name.split("/")[0]}</Owner>
              <a
                href={repository.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Name>{repository.name.split("/")[1]}</Name>
              </a>
            </Info>
            {deleteLoading[repository._id] ? (
              <LoadingComponents>
                <SpinnerComponents />
              </LoadingComponents>
            ) : (
              <DeleteButton type='button' onClick={() => onDeleteRepo(repository)}>
                Apagar
              </DeleteButton>
            )}
          </ListItem>
        ))}
      </List>
    </RepositoriesContainer>
  );
}

Repository.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteRepo: PropTypes.func.isRequired,
  deleteLoading: PropTypes.objectOf(PropTypes.bool).isRequired, // Define deleteLoading como um objeto onde as chaves são strings (IDs) e os valores são booleanos
};

export default Repository;
