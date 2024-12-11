import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/api/"
});

axiosInstance.interceptors.request.use(config => {
    console.log("Sending to API request...");
    config.headers["Accept-Language"] = "tr";
    return config;
});

axios.interceptors.response.use(
    response => {
        console.log("Response is below...");
        return response;
    },
    error => {
        console.log("An issue was encountered while making the API request : ", error);
    }
);

export default axiosInstance;