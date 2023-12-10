import React, { useState } from "react";
import styled from "styled-components";

interface SearchBarProps {
  searchTerm: string;
  isSearchVisible: boolean;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchToggle: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => (
  <SearchStyled className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  </SearchStyled>
);

export default SearchBar;

const SearchStyled = styled.section`
  &.search-bar input {
    display: flex;
    flex-wrap: wrap;
    min-width: 32px;
    min-width: 193px;
    height: 32px;
    border: 1px solid rgb(205, 206, 217);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    -webkit-box-pack: end;
    justify-content: flex-end;
    position: relative;
    padding: 8px;
  }
`;
