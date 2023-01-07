import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { ClientsActions } from "./actions";

import { SideMenu } from "../../components/SideMenu";
import { ClientCard } from "../../components/ClientCard";
import { Header } from "../../components/Header";

import { ClientDTO } from "../../dto/ClientDTO";

function Clients() {
  const actions = new ClientsActions();
  const [isLoading, setIsLoading] = useState(false);
  const [clientsList, setClientsList] = useState<ClientDTO[]>();
  const [response, setResponse] = useState("");
  const [showFormNewClient, setShowFormNewClient] = useState(false);
  const [page, setPage] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    loadClients();
  }, [page]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const loadClients = async () => {
    setIsLoading(true);
    let { data } = await actions.getClientList(page);
    console.log(data);
    setClientsList(data);
    setIsLoading(false);
  };

  const onSubmit = (data: any) => {
    createClient(data);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit);
  };

  const createClient = async (newClient: ClientDTO) => {
    setIsLoading(true);
    let response = "Salvando";
    response = await actions.createClient(newClient);
    setResponse(response);
    setIsLoading(false);
    loadClients();
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

          <SideMenu
            filter={
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
                  <div>{response && response}</div>
                  <button
                    onClick={() => {
                      setShowFormNewClient(!showFormNewClient);
                    }}
                  >
                    Novo Cliente
                  </button>
                  {showFormNewClient && (
                    <form
                      onSubmit={(event) => {
                        handleOnSubmit;
                      }}
                      className="client_form flex column"
                      method="POST"
                    >
                      <label htmlFor="name">Nome</label>
                      <input
                        id="name"
                        {...register("name")}
                        type="text"
                        required
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        {...register("email")}
                        type="email"
                        required
                      />
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        {...register("address")}
                        type="text"
                        required
                      />
                      <label htmlFor="telephone">Telefone</label>
                      <input
                        id="telephone"
                        {...register("telephone")}
                        type="tel"
                        required
                      />
                      <label htmlFor="document">CPF</label>
                      <input
                        id="document"
                        {...register("document")}
                        type="text"
                        required
                      />
                      <button>Salvar</button>
                    </form>
                  )}
                </div>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
export { Clients };
