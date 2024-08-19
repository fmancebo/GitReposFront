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
} from "./styles";

function Repository({ repositories, onDeleteRepo }) {
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
            <DeleteButton type='button' onClick={() => onDeleteRepo(repository)}>
              Apagar
            </DeleteButton>
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
};

export default Repository;
