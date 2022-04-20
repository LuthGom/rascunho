import React from "react";
import styles from "./Input.module.css";
import { FormControl, FormLabel } from "react-bootstrap";
function Input({ name, nome, onChange, value, contentEditable, disabled }) {
  return (
    <div className={styles.containerEstilo}>
      <FormLabel htmlFor="nome">{nome}</FormLabel>
      <FormControl
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
