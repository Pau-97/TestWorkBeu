import axios, { AxiosInstance } from "axios";
import { GEOLOCATION_API } from "../config/enviroments";
import { GeolocationResponse } from "interfaces/Geolocation.interface";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: `${GEOLOCATION_API.GEOLOCATION_URL}`,
    timeout: 30000,
    timeoutErrorMessage: 'Hubo un problema en la conexión por favor vuelva a intentarlo'
});


const geolocationInfo = async () => {
    const { data } = await axiosInstance.get<GeolocationResponse>(`/v2/info?apikey=${GEOLOCATION_API.GEOLOCATION_KEY}`);
    return {
        cityCountry: (`IN ${data.data.location.city.name}, ${data.data.location.country.name}`).toUpperCase()
    }
}

export {
    geolocationInfo
}

