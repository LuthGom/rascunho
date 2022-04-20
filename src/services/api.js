import axios from "axios";

export const api = axios.create({
  baseURL: "https://vila-api.herokuapp.com",
})
  ;

export const urlUsuarios = axios.create({
  baseURL: "https://api-loja-t11.herokuapp.com/usuario"
})
