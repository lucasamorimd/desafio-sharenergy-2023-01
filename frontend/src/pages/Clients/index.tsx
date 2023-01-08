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
import { DataResponse } from "../../types/ClientResponseType";

function Clients() {
  const actions = new ClientsActions();
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState<ClientDTO[]>();
  const [showFormNewClient, setShowFormNewClient] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    loadClients();
  }, [page]);

  const loadClients = async () => {
    let { data }: DataResponse = await actions.getClientList(page);
    setClientsList(data.clients);
    let lastPage = Math.ceil(data.total / data.perPage);
    setLastPage(lastPage);
    setIsLoading(false);
  };

  return (
    <Header active="clients">
      <section>
        <Widget title="Clientes">
          {isLoading ? (
            <>Carregando</>
          ) : clientsList ? (
            clientsList.map((client, index) => {
              return (
                <ClientCard key={index} client={client} load={loadClients} />
              );
            })
          ) : (
            <>Não há clientes cadastrados</>
          )}
        </Widget>
      </section>

      <SideMenu title="Ações">
        <>
          <Pagination setPage={setPage} page={page} lastPage={lastPage} />
          <button
            onClick={() => {
              setShowFormNewClient(!showFormNewClient);
            }}
          >
            Novo Cliente
          </button>
          {showFormNewClient && <ClientFormCreate loadClients={loadClients} />}
        </>
      </SideMenu>
    </Header>
  );
}
export { Clients };
