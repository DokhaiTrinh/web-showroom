import { Axios, AxiosRequestHeaders } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const baseHeaders: AxiosRequestHeaders = {
  
}

const axios = new Axios({
  baseURL: baseUrl,
  headers: baseHeaders
});

export default axios;
