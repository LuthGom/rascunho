import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function Feitiço() {
  const { id } = useParams();
  const [value, setValue] = useState({});
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    api
      .get(`/contacts/${id}`)
      .then((response) => {
        console.log(response.data);
        setValue(response.data);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  function handleAtualizar() {
      api
        .put("/contacts/" + id, value)
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.log(err);
        });
        navigate("/atualizacaoSucedida")
  }

  function editar(e) {
    if (e.target.disabled && e.target.value === { disabled }) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
    setValue(...value)
  }
  return (
    <div
      style={{
        width: " 400px",
        height: " 250px",
        padding: "3em",
        /* margi'n: 1em' */
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        background: "linear-gradient(45deg, white, black)",
        backgroundSize: "300% 300%",
        animation: "bg-tr 5s ease-in-out infinite",
      }}
    >
      <Input
        value={value.name}
        nome="Nome"
        name="name"
        disabled={disabled}
        onChange={handleOnChange}
      />
      <Input
        value={value.email}
        nome="Elemento"
        name="element"
        disabled={disabled}
        onChange={handleOnChange}
      />
      <Input
        value={value.phone}
        nome="Vida"
        name="health_point"
        disabled={disabled}
        onChange={handleOnChange}
      />
      <Button nome="Editar" click={editar} />
      <Button nome="Salvar Alterações" click={handleAtualizar}/>
      <div></div>
    </div>
  );
}
