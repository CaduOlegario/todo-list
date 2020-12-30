import React from "react";
import styles from "./Input.module.css";

const Input = ({ event, type, text }) => {
  return (
    <input className={styles.text} onChange={event} type={type} value={text} />
  );
};

export default Input;
