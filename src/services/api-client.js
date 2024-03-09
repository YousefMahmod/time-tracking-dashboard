import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

class ApiClient {
    endpoint;

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getAllProducts = () => {
        return axiosInstance.get(this.endpoint).then(res => res.data);
    }
}

export default ApiClient;