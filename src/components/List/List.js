import React from "react";
import styles from "./List.module.css";

const List = ({ items, setItems }) => {
  const removeLi = (event) => {
    console.log(event.target.innerText);
    const removeItem = event.target.innerText;

    const filteredItems = items.filter((item) => item !== removeItem);
    setItems(filteredItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <div className={styles.content}>
          <li onClick={removeLi} className={styles.list} key={index}>
            {item}
          </li>
        </div>
      ))}
      <p className={styles.obs}>*Clique no Item para excluir.</p>
    </ul>
  );
};
export default List;
