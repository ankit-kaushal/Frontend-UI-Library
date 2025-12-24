"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

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

const searchData: SearchResult[] = [
  {
    id: "overview",
    title: "Overview",
    description: "Get started with Uilab",
    href: "/",
    category: "Getting Started",
    tags: ["overview", "getting started", "introduction"],
  },
  {
    id: "button",
    title: "Button",
    description:
      "A versatile button component with multiple variants, sizes, color schemes, and states",
    href: "/components/button",
    category: "Components",
    tags: [
      "button",
      "click",
      "action",
      "primary",
      "secondary",
      "outline",
      "link",
    ],
  },
  {
    id: "modal",
    title: "Modal",
    description: "A modal dialog component for overlaying content",
    href: "/components/modal",
    category: "Components",
    tags: ["modal", "dialog", "overlay", "popup"],
  },
  {
    id: "input",
    title: "Input",
    description: "Form input component with various types and states",
    href: "/components/input",
    category: "Components",
    tags: ["input", "form", "text", "field"],
  },
  {
    id: "card",
    title: "Card",
    description: "A container component for displaying content",
    href: "/components/card",
    category: "Components",
    tags: ["card", "container", "content"],
  },
  {
    id: "avatar",
    title: "Avatar",
    description: "User avatar component with image and fallback",
    href: "/components/avatar",
    category: "Components",
    tags: ["avatar", "user", "profile", "image"],
  },
  {
    id: "badge",
    title: "Badge",
    description: "Small status indicator component",
    href: "/components/badge",
    category: "Components",
    tags: ["badge", "status", "indicator", "label"],
  },
  {
    id: "alert",
    title: "Alert",
    description: "Alert component for displaying important messages",
    href: "/components/alert",
    category: "Components",
    tags: ["alert", "message", "notification", "warning"],
  },
  {
    id: "tooltip",
    title: "Tooltip",
    description: "Tooltip component for additional information",
    href: "/components/tooltip",
    category: "Components",
    tags: ["tooltip", "help", "information", "hint"],
  },
  {
    id: "dropdown",
    title: "Dropdown",
    description: "Dropdown menu component for navigation",
    href: "/components/dropdown",
    category: "Components",
    tags: ["dropdown", "menu", "navigation", "select"],
  },
  {
    id: "tabs",
    title: "Tabs",
    description: "Tab component for organizing content",
    href: "/components/tabs",
    category: "Components",
    tags: ["tabs", "navigation", "content", "organize"],
  },
  {
    id: "accordion",
    title: "Accordion",
    description: "Collapsible content component",
    href: "/components/accordion",
    category: "Components",
    tags: ["accordion", "collapse", "expand", "content"],
  },
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  const performSearch = useCallback((query: string) => {
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
  }, []);

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
