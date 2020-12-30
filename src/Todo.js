import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import List from "./components/List/List";

const Todo = () => {
  const [text, setText] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("items")) {
      let itemsTest = localStorage.getItem("items").split(",");
      setItems(itemsTest);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", items);
  }, [items]);

  return (
    <div className={styles.container}>
      <Title text="Todo List" />
      <Form text={text} setText={setText} items={items} setItems={setItems} />
      <br />
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default Todo;
