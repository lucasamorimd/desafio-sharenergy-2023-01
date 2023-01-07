import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClientCard } from "../../components/ClientCard";
import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientDetailActions } from "./actions";

import "./styles.css";

function ClientDetail() {
  const params = useParams();
  const [client, setClient] = useState<ClientDTO | null>();
  const [isLoading, setIsLoading] = useState(true);
  const actions = new ClientDetailActions();

  useEffect(() => {
    loadClient();
  }, []);

  const loadClient = async () => {
    if (params.id) {
      setClient(null);
      let response = await actions.getClient(params.id);
      if (response.data) {
        setClient(response.data);
      }
    }
    setIsLoading(false);
  };
  return (
    <Header active="clients">
      <section>
        <Widget title="Detalhes do cliente">
          {isLoading ? (
            <>Carregando</>
          ) : client ? (
            <ClientCard client={client} load={loadClient} />
          ) : (
            <>Cliente não encontrado</>
          )}
        </Widget>
      </section>
    </Header>
  );
}
export { ClientDetail };
