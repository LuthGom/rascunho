import { useState, useEffect } from "react";
import Cartao from "../../components/Cartao/Cartao.jsx";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home({ id }) {
  const [values, setvalues] = useState([]);
  useEffect(() => {
    api
      .get(`/contacts`)
      .then((response) => {
        setvalues(response.data);
      })
      .catch((erro) => {
        console.log("Tem algo errado com a requisição" + { mensagem: erro });
      });
  }, []);
  return (
    <div className={styles.container}>
      {values.map((fada) => {
        return (
          <div key={fada.id}>
            <Cartao
              nome={fada.name}
              elemento={fada.email}
              vida={fada.phone}
              id={fada.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
