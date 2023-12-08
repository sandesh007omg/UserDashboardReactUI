import React, { useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  isSearchVisible: boolean;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchToggle: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  isSearchVisible,
  onSearchChange,
  onSearchToggle,
}) => (
  <div className="search-bar">
    <button onClick={onSearchToggle}>Toggle Search</button>
    {isSearchVisible && (
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    )}
  </div>
);

export default SearchBar;
