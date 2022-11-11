import { api } from "../../api"
import { getUsersFailed, getUsersStarted, getUsersSuccess, getAuthorizedSuccess } from "../actionCreators/users"

export const getUsers = (nickname) => {
  return async (dispatch) => {
    try {
      if (!nickname) {
        dispatch(getUsersFailed(new Error("Nope nickname, please complete nickname")))
      }
      dispatch(getUsersStarted());
      const { data } = await api.users.getUsers({
        params: {
          nickname: nickname
        }
      });
      dispatch(getUsersSuccess(...data));
    } catch (error) {
      dispatch(getUsersFailed(error))
    }
  }
}

export const getAuthorizedUser = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStarted());
      const { data } = await api.users.getUsers({
        params: {
          nickname: "vosduxxx",
        }
      });
      dispatch(getAuthorizedSuccess(...data));
    } catch (error) {
      dispatch(getUsersFailed(error))
    }
  }
}