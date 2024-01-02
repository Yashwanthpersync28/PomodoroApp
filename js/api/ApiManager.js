import { useSelector } from "react-redux";
import { apiClient } from "./ApiClient";

export const ApiManager = ( token, { method, url, body}) => {
    return new Promise(async (resolve, reject) => {
        const data = {
            method, url, body
        }
        console.log("API Manager Request Log",token, token, data);
        try {
            let resp = await apiClient[method](url, token, body);
            console.log("ApiManager Response ", JSON.parse(JSON.stringify(resp)));
            return resolve(resp);
        } catch (err) {
            console.log("API Manager Catch Error", err);
            if (err.code === "ECONNABORTED") {
                return reject("Timeout error")
            } else {
                return reject(err.response || err);
            }
        }
    })
};