import React, { useState } from "react";
import "./styles.css";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "../../pages/Clients/actions";
import { UserDTO } from "../../dto/UserDTO";

type FormCreateClientProps = {
  loadClients: Function;
};

function ClientFormCreate({ loadClients }: FormCreateClientProps) {
  const actions = new ClientsActions();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    formState,
  } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState("");

  const onSubmit = async (data: FieldValues) => {
    if (isValid) {
      let newClient: ClientDTO = {
        name: data.name,
        email: data.email,
        telephone: data.telephone,
        address: data.address,
        document: data.document,
      };
      createClient(newClient);
    }
  };

  const createClient = async (newClient: ClientDTO) => {
    let response = await actions.createClient(newClient);
    setResponse(response);
    setIsLoading(false);
    loadClients();
  };

  return (
    <>
      <div className="messageArea">{response}</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="client_form"
        method="POST"
      >
        <div className="inputAreaCreate">
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")} type="text" required />
        </div>
        <div className="inputAreaCreate">
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} type="email" required />
        </div>
        <div className="inputAreaCreate">
          <label htmlFor="address">Endereço</label>
          <input id="address" {...register("address")} type="text" required />
        </div>
        <div className="inputAreaCreate">
          <label htmlFor="telephone">Telefone</label>
          <input
            id="telephone"
            {...register("telephone")}
            type="tel"
            required
          />
        </div>
        <div className="inputAreaCreate">
          <label htmlFor="document">CPF</label>
          <input id="document" {...register("document")} type="text" required />
        </div>
        <button className="save_create">Salvar</button>
      </form>
    </>
  );
}
export { ClientFormCreate };
