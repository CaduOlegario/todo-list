import React from "react";
import styles from "./Button.module.css";

const Button = ({ event, text }) => {
  return (
    <button className={styles.button} onClick={event}>
      {text}
    </button>
  );
};

export default Button;
