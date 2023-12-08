import React, { useState } from "react";

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
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBar;
