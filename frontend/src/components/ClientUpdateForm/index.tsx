import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "../../pages/Clients/actions";
import "./styles.css";
type ClientUpdateFormType = {
  client: ClientDTO;
  loadClients: Function;
};
function ClientUpdateForm({ client, loadClients }: ClientUpdateFormType) {
  const [response, setResponse] = useState("");
  const actions = new ClientsActions();
  const { register, watch, handleSubmit } = useForm({ defaultValues: client });

  useEffect(() => {
    const subscription = watch(() => {});
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: any) => {
    updateClient(data);
  };
  const updateClient = async (data: ClientDTO) => {
    let response = await actions.updateClient(data);
    setResponse(response);

    loadClients();
  };
  return (
    <div className="updateArea">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="client_form flex column"
        method="POST"
      >
        {response && <span>{response}</span>}
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
    </div>
  );
}
export { ClientUpdateForm };
