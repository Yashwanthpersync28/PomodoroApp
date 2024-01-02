import axios from 'axios';
import { baseUrl } from '../constants';
const apiBaseUrl = baseUrl
class ApiClient {
    static headersPromise(token){
        axios.defaults.timeout = 60000;
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.defaults.headers.common['Cache-Control'] = 'no-cache, no-store';
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.common['uid'] = token;
        if (token) {
            // axios.defaults.headers.common['Authorization'] = token;
        }
    }

    async get(url, token, additionalHeaders, params) {
        ApiClient.headersPromise(token);
        if(additionalHeaders){
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h =>{
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }
        return(await axios.get(apiBaseUrl + url));
    }

    async post(url, token, body, additionalHeaders){
        body = body || {};
        ApiClient.headersPromise(token);
        if (additionalHeaders) {
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h => {
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }
        let resp =  (await axios.post(apiBaseUrl + url, body));
        return resp
    }

    async put(url, token, body, additionalHeaders){
        body = body || {};
        ApiClient.headersPromise(token);

        if(additionalHeaders){
                let keys = Object.keys(additionalHeaders);
                keys.forEach(h => {
                    axios.defaults.headers.common[h] = additionalHeaders[h].value;
                });
        }
        let resp =  (await axios.put(apiBaseUrl + url, body));
        return resp
    }

    async getWithoutBaseUrl(url, additionalHeaders, token) {
        // token && ApiClient.headersPromise(token);
        // if(additionalHeaders){
        //     let keys = Object.keys(additionalHeaders);
        //     keys.forEach(h =>{
        //         axios.defaults.headers.common[h] = additionalHeaders[h].value;
        //     });
        // }
        delete axios.defaults.headers.common["Authorization"];
        axios.defaults.headers.common['accept'] = 'application/json, text/plain, */*';
        return(await axios.get(url));
    }

}
const apiClient = new ApiClient();
export {apiClient};
