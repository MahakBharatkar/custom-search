import React, { useState } from "react";
import styles from "./page.module.css";
import UserCard from "../UserCard/page";

const SearchResults = ({ users, searchQuery }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleMouseOver = (index) => {
    setHighlightedIndex(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredUsers.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.id.toLowerCase().includes(query) ||
      user.address.toLowerCase().includes(query) ||
      user.pincode.includes(query) ||
      user.items.some((item) => item.toLowerCase().includes(query))
      
    );
  });

  if(!filteredUsers.length) {
    return <div className={styles.noResults}>No User found</div>
  }
  

  return (
    <div
      className={styles.resultsContainer}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {filteredUsers.length && searchQuery !== ''
        ? filteredUsers.map((user, index) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                highlight={searchQuery}
                isHighlighted={index === highlightedIndex}
                onMouseOver={() => handleMouseOver(index)}
              />
            );
          })
        : null}
    </div>
  );
};

export default SearchResults;
