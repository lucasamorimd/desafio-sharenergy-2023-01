import { useState, useEffect } from "react";
import "./styles.css";
import { FieldValues, useForm } from "react-hook-form";
import { ClientDTO } from "../../dto/ClientDTO";
import { ClientsActions } from "../../pages/Clients/actions";

type FormCreateClientProps = {
  loadClients: Function;
};

function ClientFormCreate({ loadClients }: FormCreateClientProps) {
  const actions = new ClientsActions();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const [response, setResponse] = useState("");
  const [messageType, setMessageType] = useState("");

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

  useEffect(() => {
    console.log("opa veio");
    if (response) {
      setTimeout(() => {
        setResponse("");
      }, 5000);
    }
  }, [response]);

  const createClient = async (newClient: ClientDTO) => {
    let response = await actions.createClient(newClient);
    setResponse(response.message);
    setMessageType("success");
    if (response.data == null) {
      setMessageType("error");
    }
    loadClients();
  };

  return (
    <>
      {response && (
        <div id="messageArea" className={`messageArea ${messageType}`}>
          {response}
        </div>
      )}

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
