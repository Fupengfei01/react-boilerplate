import { Actions, UserActions } from '../actions/user';

export interface UserState {
  id: string;
  email: string;
  avatar: string;
  username: string;
}

const initialState: UserState = {
  id: '',
  email: '',
  avatar: '',
  username: '',
};

export default function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case Actions.RECEIVE_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
