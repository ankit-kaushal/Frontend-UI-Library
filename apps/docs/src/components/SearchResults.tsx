"use client";

import { useSearch, SearchResult } from "@/contexts/SearchContext";
import Link from "next/link";
import { Search, X, Loader } from "feather-icons-react";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchResults.module.scss";

const SearchResults = () => {
  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    isLoading,
    closeSearch,
    clearSearch,
    setSearchQuery,
    performSearch,
  } = useSearch();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeSearch();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            window.location.href = searchResults[selectedIndex].href;
            closeSearch();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, searchResults, selectedIndex, closeSearch]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && searchResults.length > 0) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, searchResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  if (!isSearchOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeSearch}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.searchInput}>
            <Search size={20} className={styles.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={handleInputChange}
              className={styles.input}
            />
            {searchQuery && (
              <button onClick={clearSearch} className={styles.clearButton}>
                <X size={16} />
              </button>
            )}
          </div>
          <button onClick={closeSearch} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          {isLoading ? (
            <div className={styles.loading}>
              <Loader size={20} className={styles.spinner} />
              <span>Searching...</span>
            </div>
          ) : searchQuery ? (
            searchResults.length > 0 ? (
              <div className={styles.results} ref={resultsRef}>
                {searchResults.map((result, index) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    isSelected={index === selectedIndex}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <Search size={48} className={styles.noResultsIcon} />
                <h3>No results found</h3>
                <p>Try searching for something else</p>
              </div>
            )
          ) : (
            <div className={styles.initialState}>
              <Search size={48} className={styles.initialIcon} />
              <h3>Search components</h3>
              <p>
                Start typing to search for components, documentation, and more
              </p>
              <div className={styles.shortcuts}>
                <div className={styles.shortcut}>
                  <kbd>⌘</kbd>
                  <kbd>K</kbd>
                  <span>Open search</span>
                </div>
                <div className={styles.shortcut}>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd>
                  <span>Navigate results</span>
                </div>
                <div className={styles.shortcut}>
                  <kbd>Enter</kbd>
                  <span>Select result</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SearchResultItemProps {
  result: SearchResult;
  isSelected: boolean;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  result,
  isSelected,
}) => {
  const { closeSearch } = useSearch();

  return (
    <Link
      href={result.href}
      onClick={closeSearch}
      className={`${styles.resultItem} ${isSelected ? styles.selected : ""}`}
    >
      <div className={styles.resultContent}>
        <div className={styles.resultHeader}>
          <h4 className={styles.resultTitle}>{result.title}</h4>
          <span className={styles.resultCategory}>{result.category}</span>
        </div>
        <p className={styles.resultDescription}>{result.description}</p>
        <div className={styles.resultTags}>
          {result.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SearchResults;
