import axios from "axios";

const api = axios.create({
    baseURL: "https://django-desafio-front.herokuapp.com/api/"
})

export default api