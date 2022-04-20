import { useState } from "react";
import Input from "../Input/Input.jsx";
import styles from "./Formulario.module.css";
import Button from "../Button/Button.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import api from "../../services/Api.jsx";
import { Container, Col, Row } from "react-bootstrap";
import { urlUsuarios } from "../../services/api.js";
function Formulario() {
  const [values, setValues] = useState({});
  const notify = () => toast("Enviando dados");

  function handleOnChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function CadastroDeUsurio(e) {
    e.preventDefault();
    urlUsuarios
      .post("", values)
      .then((response) => console.log(response.data))
      .catch((erro) => console.log(erro));
  }
  async function submit(e) {
    e.preventDefault();
    if (CadastroDeUsurio(e)) {
      notify();
    }
    setValues({ nome: "", apelido: "", email: "", senha: "" });
  }
  return (
    // Construímos um Componente de Input com tags input/type(text) e label reutilizáveis em qualquer lugar do projeto
    <form onSubmit={(e) => submit(e)}>
      {/* <div className={styles.container}> */}
      <Container>
        <Row>
          <Col>
            <Input nome="Nome Completo" name="nome" onChange={handleOnChange} value={values.nome} />
            <Input nome="Apelido" name="apelido" onChange={handleOnChange} value={values.apelido}/>
          </Col>
          <Col>
            <Input nome="E-mail" name="email" onChange={handleOnChange} value={values.email}/>
            <Input nome="Senha" name="senha" onChange={handleOnChange} value={values.senha}/>
          </Col>
          <div>
            <Button nome="Enviar" />
          </div>
        </Row>
      </Container>
      {/* </div> */}
      <ToastContainer />
    </form>
  );
}

export default Formulario;
