import axios from "axios";
import helpers from "../helpers";

let http = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        Authorization: 'Bearer ' + helpers.getToken() ?? ""
    }
})

export default http;