import { MY_API } from "../config/enviroments";
import axios, { AxiosInstance } from "axios";
import { RandomRespose } from "interfaces/Random.interface";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: MY_API.MY_API_URL,
    timeout: 30000,
    timeoutErrorMessage: 'Hubo un problema en la conexión por favor vuelva a intentarlo'
});


const randomInfo = async () => {
    const { data } = await axiosInstance.get<RandomRespose>(`/api?apikey=${MY_API.MY_API_KEY}`);
    return {
        phase: data.phase,
        author: data.author
    }
}


export {
    randomInfo
}

