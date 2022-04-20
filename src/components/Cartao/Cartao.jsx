import { Link } from "react-router-dom";
import DeleteBotao from "../DeleteBotao/DeleteBotao";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 250px;
  padding: 3em;
  /* margin: 1em; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: linear-gradient(45deg, white, black);
  background-size: 300% 300%;
  animation: bg-tr 5s ease-in-out infinite;

  h1,
  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: bold;
    color: white;
  }
  span {
    font-weight: normal;
    color: purple;
  }
`;
function Cartao({ id, nome, elemento, vida }) {
  return (
    <Container>
      <h1>
        Name: <span>{nome}</span>
      </h1>
      <h2>{elemento}</h2>
      <h3>{vida}</h3>
      <Link to={"/visualizar/" + id}>Visualizar</Link>
      <DeleteBotao id={id} />
    </Container>
  );
}

export default Cartao;
