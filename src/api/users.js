import { makeRequest } from "./makeRequest";

const URL = '/users';

export const getUsers = (config) => makeRequest({
  method: 'GET',
  url: URL,
  ...config,
})