import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ text, setText, items, setItems }) => {
  const handleChange = (event) => {
    let value = event.target.value;
    console.log(event);
    setText(value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (text) {
      setItems([...items, text]);
      setText("");
    }
  };

  return (
    <form>
      <Input event={handleChange} type="text" value={text} />
      <Button event={addItem} text="Add" />
    </form>
  );
};

export default Form;
