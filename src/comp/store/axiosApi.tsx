import axios from "axios";

const remote = axios.create();
export interface IPokemonListResponse {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

async function AxiosApi(url: string) {
  const response = await remote.get<IPokemonListResponse>(url);
  return response.data;
}

export default AxiosApi;
