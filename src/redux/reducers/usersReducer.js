import { GET_USERS } from "../actionCreators/users"

const initialState = {
  user: undefined,
  isUserLoading: true,
  authorizedUser: undefined,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS.STARTED:
      return {
        ...state,
        isUserLoading: true,
      };
    case GET_USERS.FAILED:
      return {
        ...state,
        isUserLoading: false,
      };
    case GET_USERS.SUCCESS:
      return {
        ...state,
        user: action.payload,
        isUserLoading: false,
      };
    case GET_USERS.AUTHORIZED_SUCCESS:
      return {
        ...state,
        authorizedUser: action.payload,
        isUserLoading: false,
      };
    default:
      return {
        ...state
      }
  }
}