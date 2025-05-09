import axios from "axios";
import { url } from "../../connection";

const axiosInstance = axios.create({
  baseURL: `${url}`,
});

const useBaseUrl = () => {
  return axiosInstance;
};

export default useBaseUrl;
