export interface IRequestService {
  get(url: string, params?: any): Promise<any>;
  post(url: string, params?: any): Promise<any>;
  put(url: string, params?: any): Promise<any>;
  delete(url: string, params?: any): Promise<any>;
}
