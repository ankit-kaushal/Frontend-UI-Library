"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { componentsData } from "@/data/components";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
}

interface SearchContextType {
  isSearchOpen: boolean;
  searchQuery: string;
  searchResults: SearchResult[];
  isLoading: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// Automatically generate search data from components data
const generateSearchData = (): SearchResult[] => {
  return componentsData.map((component) => ({
    id: component.href.replace(/\//g, "-").replace(/^-/, "") || "overview",
    title: component.name,
    description: component.description,
    href: component.href,
    category: component.category,
    tags: component.tags,
  }));
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Generate search data dynamically from components data
  const searchData = useMemo(() => generateSearchData(), []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  const performSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);

      // Simulate search delay
      setTimeout(() => {
        const results = searchData.filter((item) => {
          const searchTerm = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
            item.category.toLowerCase().includes(searchTerm)
          );
        });

        setSearchResults(results);
        setIsLoading(false);
      }, 150);
    },
    [searchData]
  );

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  const value: SearchContextType = {
    isSearchOpen,
    searchQuery,
    searchResults,
    isLoading,
    openSearch,
    closeSearch,
    setSearchQuery,
    performSearch,
    clearSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
