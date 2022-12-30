import { ApiRequest } from "../ApiRequest";
import { AxiosClient } from "./AxiosClient";

const axiosClient = new AxiosClient();
const axiosRequest = new ApiRequest(axiosClient);
export { axiosRequest };
