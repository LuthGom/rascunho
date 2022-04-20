import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../../compenents/BotaoSubmit";
import Input from "../../compenents/Input";
import styles from "./Login.module.css";
import { setUsuarios } from "../../services/Api.js";
function Login() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function login(e) {
    e.preventDefault();
    setUsuarios.post("/login", value).then((response) => {
      console.log(response.data);
      navigate("/perfil/" + response.data.usuario.id);
    });
  }
  console.log(value);
  return (
    <form className={styles.form} onSubmit={(e) => login(e)}>
      <div className={styles.titulo}>
        <h1>Login</h1>
      </div>
      <div className={styles.container}>
        <Input
          placeholder="E-mail"
          height="20px"
          width="250px"
          onChange={handleOnChange}
          name="email"
        />
        <Input
          placeholder="Senha"
          height="20px"
          width="250px"
          type="password"
          name="senha"
          onChange={handleOnChange}
        />
        <div>
          <Botao texto="Login" />
        </div>
      </div>
      <div className={styles.linkCadastro}>
        <p>Não tem uma conta ainda? </p>
        <Link to="/cadastro">Clique aqui!</Link>
      </div>
    </form>
  );
}

export default Login;
