interface IParamsClient {
  url: string;
  params?: any;
}
interface IClient {
  get(data: IParamsClient): Promise<any>;
  post(data: IParamsClient): Promise<any>;
  put(data: IParamsClient): Promise<any>;
  delete(data: IParamsClient): Promise<any>;
}
export type { IClient, IParamsClient };
