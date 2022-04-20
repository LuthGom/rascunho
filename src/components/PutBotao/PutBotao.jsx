import React, { useState } from "react";
import { api } from "../../services/api";

export default function PutBotao({ id, atualizacoes }) {
  const [novoValue, setNovoValue] = useState({});
  function atualizar() {
    setNovoValue(atualizacoes);
    api
      .put("/fairies/" + id, novoValue)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <button
      onClick={atualizar}
      style={{
        background: "none",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Salvar Atualizações
    </button>
  );
}
