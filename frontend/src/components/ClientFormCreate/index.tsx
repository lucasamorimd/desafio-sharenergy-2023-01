import React, { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "../../pages/Clients/actions";

function ClientFormCreate() {
  const actions = new ClientsActions();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(true);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const createClient = async (newClient: ClientDTO) => {
    let response = "Salvando";
    response = await actions.createClient(newClient);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={(event) => {
        handleOnSubmit;
      }}
      className="client_form flex column"
      method="POST"
    >
      <label htmlFor="name">Nome</label>
      <input id="name" {...register("name")} type="text" required />
      <label htmlFor="email">Email</label>
      <input id="email" {...register("email")} type="email" required />
      <label htmlFor="address">Endereço</label>
      <input id="address" {...register("address")} type="text" required />
      <label htmlFor="telephone">Telefone</label>
      <input id="telephone" {...register("telephone")} type="tel" required />
      <label htmlFor="document">CPF</label>
      <input id="document" {...register("document")} type="text" required />
      <button>Salvar</button>
    </form>
  );
}
export { ClientFormCreate };
