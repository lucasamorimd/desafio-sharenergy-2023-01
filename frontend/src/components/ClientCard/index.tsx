import { useState } from "react";

import { ClientDTO } from "../../dto/ClientDTO";

import { ClientUpdateForm } from "../ClientUpdateForm";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import "./styles.css";
import { ClientsActions } from "../../pages/Clients/actions";

type ClientProp = {
  client: ClientDTO;
};

function ClientCard({ client }: ClientProp) {
  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [response, setResponse] = useState("");
  const actions = new ClientsActions();

  const handleOpenFormUpdate = () => {
    setOpenFormUpdate(!openFormUpdate);
    setOpenDelete(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
    setOpenFormUpdate(false);
  };

  const deleteClient = async (client: ClientDTO) => {
    console.log(client);
    let response = await actions.deleteClient(client);
    setResponse(response);
    setOpenDelete(false);
  };

  return (
    <>
      <article className="client_card">
        <div className="client_data">
          <div className="client_email">{client.email}</div>
          <div className="client_button warning" onClick={handleOpenFormUpdate}>
            <FiEdit2 />
          </div>
          <div className="client_button danger" onClick={handleOpenDelete}>
            <FiTrash2 />
          </div>
        </div>
        {response && <div className="deleteArea">{response}</div>}
        {openDelete && (
          <div className="deleteArea">
            <button
              className="client_button"
              onClick={() => {
                setOpenDelete(false);
              }}
            >
              Cancelar
            </button>
            <button
              className="client_button danger"
              onClick={() => {
                deleteClient(client);
              }}
            >
              Deseja deletar {client.name}?
            </button>
          </div>
        )}
        <div className="client_name">{client.name}</div>
        <div className="client_document"> {client.document}</div>
        {openFormUpdate && <ClientUpdateForm client={client} />}
      </article>
    </>
  );
}
export { ClientCard };
