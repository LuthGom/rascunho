import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className={styles.headerEstilo}>
   
        <Link to="/" >Home</Link>
        <Link to="/contato">Contato</Link>
      </header>
    </>
  );
}

export default Header;
