import axios from "axios";

const instance = axios.create({
    baseURL: 'https://beta.api.turismoenlacordillera.com/api/',
    timeout: 30000,
});
export default instance;
