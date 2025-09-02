import Axios from "axios";
import { env } from "../../lib/env";

const axios = Axios.create({
    baseURL: env.BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// axiosInstance.interceptors.response.use()
// axiosInstance.interceptors.request.use()

export default axios;