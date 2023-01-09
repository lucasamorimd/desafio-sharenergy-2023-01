import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "../../pages/Clients/actions";
import "./styles.css";
type ClientUpdateFormType = {
  client: ClientDTO;
  setClient: React.SetStateAction<any>;
};
function ClientUpdateForm({ client, setClient }: ClientUpdateFormType) {
  const [response, setResponse] = useState("");
  const { register, watch, handleSubmit } = useForm({
    defaultValues: client,
  });
  const [messageType, setMessageType] = useState("");
  const actions = new ClientsActions();

  useEffect(() => {
    const subscription = watch(() => {});
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setResponse("");
      }, 5000);
    }
  }, [response]);

  const onSubmit = (data: any) => {
    updateClient(data);
  };
  const updateClient = async (params: ClientDTO) => {
    let response = await actions.updateClient(params);
    setResponse(response.message);
    setMessageType("success");
    if (response.data == null) {
      setMessageType("error");
      return;
    }
    setClient(response.data);
  };
  return (
    <>
      {response && (
        <div id="messageArea" className={`messageArea ${messageType}`}>
          {response}
        </div>
      )}
      <div className="updateArea">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="client_form_update"
          method="POST"
        >
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
            <input
              id="document"
              {...register("document")}
              type="text"
              required
            />
          </div>
          <button className="save_update">Salvar</button>
        </form>
      </div>
    </>
  );
}
export { ClientUpdateForm };
