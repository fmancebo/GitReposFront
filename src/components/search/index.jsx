import React, { useState } from "react";
import PropTypes from "prop-types";
import { SearchContainer, SearchLabel, SearchInput, SearchButton, ButtonContainer } from "./styles";

function Search({ query, onSearch, onClear }) {
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onClear();
  };

  return (
    <SearchContainer>
      <SearchLabel htmlFor='query'>Procurar:</SearchLabel>
      <SearchInput
        type='text'
        name='query'
        id='query'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ButtonContainer>
        <SearchButton type='button' onClick={handleClear}>
          Limpar
        </SearchButton>
        <SearchButton type='button' onClick={handleSearch}>
          Procurar
        </SearchButton>
      </ButtonContainer>
    </SearchContainer>
  );
}
Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Search;
