import { useState } from "react";

import { ClientDTO } from "../../dto/ClientDTO";

import { ClientUpdateForm } from "../ClientUpdateForm";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import "./styles.css";
import { ClientsActions } from "../../pages/Clients/actions";
import { Link } from "react-router-dom";

type ClientProp = {
  client: ClientDTO;
  load: Function;
};

function ClientCard({ client, load }: ClientProp) {
  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [clientState, setClientState] = useState(client);
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
    let data = await actions.deleteClient(client);
    setOpenDelete(false);
    load();
  };

  const getDate = ({ created_at }: ClientDTO) => {
    let day =
      created_at?.day.toString().length == 1
        ? "0" + created_at.day
        : created_at?.day;
    let month =
      created_at?.month.toString().length == 1
        ? "0" + created_at.month
        : created_at?.month;
    return `${day}/${month}/
    ${created_at?.year} - ${created_at?.hour}:
    ${created_at?.minutes}`;
  };

  return (
    <>
      <article className="client_card">
        <div className="client_data">
          <div className="client_email">
            <Link to={`/client/${clientState.id}`}>{clientState.email}</Link>
          </div>
          <div className="client_button warning" onClick={handleOpenFormUpdate}>
            <FiEdit2 />
          </div>
          <div className="client_button danger" onClick={handleOpenDelete}>
            <FiTrash2 />
          </div>
        </div>
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
                deleteClient(clientState);
              }}
            >
              Deseja deletar {clientState.name}?
            </button>
          </div>
        )}
        <div className="client_name">{clientState.name}</div>
        <div className="client_document"> {clientState.document}</div>
        <div className="client_document">Criado em {getDate(clientState)}</div>
        {openFormUpdate && (
          <ClientUpdateForm client={clientState} setClient={setClientState} />
        )}
      </article>
    </>
  );
}
export { ClientCard };
