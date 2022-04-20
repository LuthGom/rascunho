import { api } from "../../services/api";
import { Button } from "react-bootstrap";
export default function DeleteBotao({ id }) {
  function deletar() {
    api.delete("/fairies/" + id).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Button onClick={deletar} variant="success" style={{backgroundColor: 'red'}}>
      deletar
    </Button>
  );
}
