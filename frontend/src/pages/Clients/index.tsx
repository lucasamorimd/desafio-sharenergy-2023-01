import { useEffect, useState } from "react";
import "./styles.css";
import { ClientsActions } from "./actions";

import { SideMenu } from "../../components/SideMenu";
import { ClientCard } from "../../components/ClientCard";
import { Header } from "../../components/Header";
import { ClientFormCreate } from "../../components/ClientFormCreate";
import { Pagination } from "../../components/Pagination";

import { ClientDTO } from "../../dto/ClientDTO";
import { Widget } from "../../components/Widget";

function Clients() {
  const actions = new ClientsActions();
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState<ClientDTO[]>();
  const [showFormNewClient, setShowFormNewClient] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadClients();
  }, [page]);

  const loadClients = async () => {
    let { data } = await actions.getClientList(page);
    setClientsList(data);
    setIsLoading(false);
  };

  return (
    <Header active="clients">
      <section id="geral">
        <div className="container">
          <section>
            <Widget title="Clientes">
              {isLoading ? (
                <>Carregando</>
              ) : clientsList ? (
                clientsList.map((client, index) => {
                  return (
                    <ClientCard
                      key={index}
                      client={client}
                      loadClients={loadClients}
                    />
                  );
                })
              ) : (
                <>Não há clientes cadastrados</>
              )}
            </Widget>
          </section>

          <SideMenu title="Ações">
            <>
              <Pagination setPage={setPage} page={page} />
              <div className="actionAreaClients column">
                <button
                  onClick={() => {
                    setShowFormNewClient(!showFormNewClient);
                  }}
                >
                  Novo Cliente
                </button>
                {showFormNewClient && (
                  <ClientFormCreate loadClients={loadClients} />
                )}
              </div>
            </>
          </SideMenu>
        </div>
      </section>
    </Header>
  );
}
export { Clients };
