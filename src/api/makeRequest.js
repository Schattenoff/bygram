import axios from "axios";

const API_ENDPOINT = 'https://server-bygram.herokuapp.com';

export const makeRequest = (config) => {
  config.url = `${API_ENDPOINT}${config.url}`;
  
  return axios(config);
}