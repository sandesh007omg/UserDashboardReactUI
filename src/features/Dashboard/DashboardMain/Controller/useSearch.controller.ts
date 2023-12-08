import { useState, useMemo, ChangeEvent } from "react";

interface SearchItem {
  [key: string]: string | number; // Adjust this based on your actual data structure
}

interface UseSearchResult {
  searchTerm: string;
  isSearchVisible: boolean;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchToggle: () => void;
  filteredData: SearchItem[];
}

const useSearch = (initialData: SearchItem[]): UseSearchResult => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const filteredData = useMemo(() => {
    return initialData?.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [initialData, searchTerm]);

  return {
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    filteredData,
  };
};

export default useSearch;
