import { api } from "../../api"
import { getUsersFailed, getUsersStarted, getUsersSuccess, getAuthorizedSuccess } from "../actionCreators/users"

export const getUsers = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStarted());
      const {data} = await api.users.getUsers(id);
      
      dispatch(getUsersSuccess(data));
    } catch(error) {
      dispatch(getUsersFailed(error))
    }
  }
}

export const getAuthorizedUser = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStarted());
      const {data} = await api.users.getUsers(1);
      
      dispatch(getAuthorizedSuccess(data));
    } catch(error) {
      dispatch(getUsersFailed(error))
    }
  }
}