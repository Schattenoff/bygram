export const GET_USERS = {
  SUCCESS: 'GET_USERS_SUCCESS',
  FAILED: 'GET_USERS_FAILED',
  STARTED: 'GET_USERS_STARTED',
  AUTHORIZED_SUCCESS: 'GET_USERS_AUTHORIZED_SUCCESS'
}

export const getUsersSuccess = (users) => ({
  type: GET_USERS.SUCCESS,
  payload: users,
});

export const getUsersFailed = (error) => ({
  type: GET_USERS.FAILED,
  payload: error,
});

export const getUsersStarted = () => ({
  type: GET_USERS.STARTED,
});

export const getAuthorizedSuccess = (user) => ({
  type: GET_USERS.AUTHORIZED_SUCCESS,
  payload: user
});

