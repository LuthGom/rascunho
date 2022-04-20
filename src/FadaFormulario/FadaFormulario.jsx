import React from "react";
import Input from "../components/Input/Input.jsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/Button/Button.jsx";
import PutBotao from "../components/PutBotao/PutBotao.jsx";
export default function FadaFormulario({
  name,
  element,
  health_point,
  id,

  values,
}) {
  const [value, setValue] = useState({});
  const [disabled, setDisabled] = useState(true);
  const notify = () => toast("Loading");

  async function submit(e) {
    e.preventDefault();
    // api(values);
  }
  function handleOnChange(e) {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.values });
    console.log(value);
  }
  function editar(e) {
    if (e.target.disabled && e.target.value === { disabled }) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  return (
    <form onSubmit={submit}>
      <div>
        <Input
          nome="Nome"
          value={name}
          onChange={handleOnChange}
          contentEditable="true"
          disabled={disabled}
        />
        <Input
          nome="Elemento"
          value={element}
          onChange={handleOnChange}
          contentEditable="true"
          disabled={disabled}
        />
        <Input
          nome="Vida"
          value={health_point}
          onChange={handleOnChange}
          contentEditable="true"
          disabled={disabled}
        />
        <div>
          <Button nome="Editar" click={editar} />
          <PutBotao id={id} atualizacoes={values} />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}
