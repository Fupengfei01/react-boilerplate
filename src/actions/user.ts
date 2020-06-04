import { UserState } from '../reducers/user';

export enum Actions {
  USER_LOGIN = 'USER_LOGIN',
  RECEIVE_USER_INFO = 'RECEIVE_USER_INFO',
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginAction {
  type: Actions.USER_LOGIN;
  payload: LoginPayload;
}

export function login(payload: LoginPayload): LoginAction {
  return {
    type: Actions.USER_LOGIN,
    payload,
  };
}

export interface ReceiveUserInfoAction {
  type: Actions.RECEIVE_USER_INFO;
  payload: UserState;
}

export type UserActions = ReceiveUserInfoAction;
