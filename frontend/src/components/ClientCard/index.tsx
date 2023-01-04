import { ClientDTO } from "../../dto/ClientDTO";
import "./styles.css";

type ClientProp = {
  client: ClientDTO;
};

function ClientCard({ client }: ClientProp) {
  return (
    <article>
      <div className="user_data">
        <div className="user_email">{client.email}</div>
        <div className="user_age">Atualizar</div>
        <div className="user_age">Apagar</div>
      </div>

      <div className="user_name">{client.name}</div>
      <div className="user_nickname"> {client.document}</div>
    </article>
  );
}
export { ClientCard };
