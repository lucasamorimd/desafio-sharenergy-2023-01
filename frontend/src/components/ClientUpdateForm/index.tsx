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
  const updateClient = async (params: ClientDTO) => {
    let data = await actions.updateClient(params);
    setResponse(data.message);
    loadClients();
  };
  return (
    <div className="updateArea">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="client_form_update"
        method="POST"
      >
        {response && <span>{response}</span>}
        <div className="inputAreaUpdate">
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")} type="text" required />
        </div>
        <div className="inputAreaUpdate">
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} type="email" required />
        </div>
        <div className="inputAreaUpdate">
          <label htmlFor="address">Endereço</label>
          <input id="address" {...register("address")} type="text" required />
        </div>
        <div className="inputAreaUpdate">
          <label htmlFor="telephone">Telefone</label>
          <input
            id="telephone"
            {...register("telephone")}
            type="tel"
            required
          />
        </div>
        <div className="inputAreaUpdate">
          <label htmlFor="document">CPF</label>
          <input id="document" {...register("document")} type="text" required />
        </div>
        <button className="save_update">Salvar</button>
      </form>
    </div>
  );
}
export { ClientUpdateForm };
