import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { ClientsActions } from "./actions";

import { SideMenu } from "../../components/SideMenu";
import { ClientCard } from "../../components/ClientCard";
import { Header } from "../../components/Header";

import { ClientDTO } from "../../dto/ClientDTO";
import { ClientFormCreate } from "../../components/ClientFormCreate";

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
    console.log(data);
    setClientsList(data);
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <section id="geral">
        <div className="container">
          <section>
            <div className="widget">
              <div className="widget_title">
                <div className="widget_title_text">Clientes</div>
                <div className="widget_title_bar"></div>
              </div>
              <div className="widget_body flex">
                {isLoading ? (
                  <>Carregando</>
                ) : (
                  clientsList &&
                  clientsList.map((client, index) => {
                    return (
                      <ClientCard
                        key={index}
                        client={client}
                        loadClients={loadClients}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </section>

          <SideMenu>
            <>
              <div className="pagination">
                <button
                  disabled={page === 1}
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  &lt;
                </button>
                <button>{page}</button>
                <button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  &gt;
                </button>
              </div>
              <div className="searchArea column">
                <button
                  onClick={() => {
                    setShowFormNewClient(!showFormNewClient);
                  }}
                >
                  Novo Cliente
                </button>
                {showFormNewClient && <ClientFormCreate />}
              </div>
            </>
          </SideMenu>
        </div>
      </section>
    </>
  );
}
export { Clients };
