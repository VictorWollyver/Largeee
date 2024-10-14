import axios from "axios";

const api = axios.create({
	baseURL: "https://largeee-api-8f58b08ce2c7.herokuapp.com",
});

export default api;
