import { ClientDTO } from "../dto/ClientDTO";

type ClientResponseType = {
  perPage: number;
  page: number;
  total: number;
  clients: ClientDTO[];
};

type DataResponse = {
  data: ClientResponseType | null;
  message: string;
};

export type { ClientResponseType, DataResponse };
