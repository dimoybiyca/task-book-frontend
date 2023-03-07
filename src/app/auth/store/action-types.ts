export enum ActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  REFRESH_TOKEN = '[Auth] Refresh token',
  REFRESH_TOKEN_SUCCESS = '[Auth] Refresh token success',
  REFRESH_TOKEN_FAILURE = '[Auth] Refresh token failure',

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',
}
