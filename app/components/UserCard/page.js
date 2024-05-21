import styles from "./page.module.css";

const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <span key={i} className={styles.highlight}>{part}</span> : part
  );
};

const UserCard = ({ user, highlight, isHighlighted, onMouseOver }) => {

  const query = highlight.toLowerCase();
  const isItem = query !== '' && user.items.some((item) => item.toLowerCase().includes(query));


  return (
    <div
    className={`${styles.userCard} ${isHighlighted ? styles.highlightCard : ''}`}
      onMouseOver={onMouseOver}
    >
      <span className={styles.id}>{highlightText(user.id.toString(), highlight)}</span>
      <div className={styles.name}> {highlightText(user.name, highlight)}</div>
      {isItem? (<ul>
        <li>{highlightText(highlight,highlight)} found in items</li>
      </ul>): null}
      <span className={styles.address}>{highlightText(user.address, highlight)}</span>
      <div>{highlightText(user.pincode, highlight)}</div>
    </div>
  );
};

export default UserCard;
