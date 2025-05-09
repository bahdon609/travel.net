import axios from "axios";
import { url } from "../../connection";


const axiosInstance = axios.create({
  baseURL: `${url}/api`
});

const useAxiosPublic = () => {
  return axiosInstance;
}

export default useAxiosPublic;