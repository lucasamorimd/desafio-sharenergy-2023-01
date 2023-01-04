import React, { useEffect, useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "./actions";
import { useForm } from "react-hook-form";
import "./styles.css";
import { ClientCard } from "../../components/ClientCard";
function Clients() {
  const actions = new ClientsActions();
  const [isLoading, setIsLoading] = useState(false);
  const [clientsList, setClientsList] = useState<ClientDTO[]>();
  const [response, setResponse] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    loadClients();
  }, []);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const loadClients = async () => {
    setIsLoading(true);
    let { data } = await actions.getClientList();
    console.log(data);
    setClientsList(data);
    setIsLoading(false);
  };

  const onSubmit = (data: any) => {
    createClient(data);
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
                return <ClientCard key={index} client={client} />;
              })
            )}
          </div>
        </div>
      </section>
      <SideMenu
        filter={
          <div className="searchArea column">
            <div>{isLoading ? response && response : ""}</div>
            <button>Novo Cliente</button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="client_form flex column"
              method="POST"
            >
              <label htmlFor="name">Nome</label>
              <input id="name" {...register("name")} type="text" required />
              <label htmlFor="email">Email</label>
              <input id="email" {...register("email")} type="email" required />
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
          </div>
        }
      />
    </>
  );
}
export { Clients };