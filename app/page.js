'use client'
import SearchResults from "./components/SearchResults/page";
import data from "./mockData";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
   <div>
    <div>
      <input
      type="search"
      placeholder="Search users..."
      onChange={handleChange}
      className={styles.userInput}
    />
      <SearchResults users={data} searchQuery={searchQuery} />
    </div>

   </div>
  );
}
