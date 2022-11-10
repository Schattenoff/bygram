import { makeRequest } from "./makeRequest";

const URL = '/users';

export const getUsers = (userId, config) => makeRequest({
  method: 'GET',
  url: `${URL}/${userId}`,
  ...config,
})