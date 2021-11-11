import axios from "axios";
const request = axios.create();
request.interceptors.response.use(
    (res) => {
        console.log(res);
        if (res.status === 200) {
            return Promise.resolve(res.data);
        }
    },
    (err) => {}
);
export default request;
