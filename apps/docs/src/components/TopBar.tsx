"use client";

import { useState } from "react";
import { Search, Moon, Github, Settings } from "feather-icons-react";
import styles from "./TopBar.module.scss";

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>TSLB UI Library</h1>
        </div>

        <div className={styles.center}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>

        <div className={styles.right}>
          <button className={styles.iconButton} title="Theme">
            <Moon size={20} />
          </button>
          <button className={styles.iconButton} title="GitHub">
            <Github size={20} />
          </button>
          <button className={styles.iconButton} title="Settings">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
