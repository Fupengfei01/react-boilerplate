import { request } from '../utils';
import { RequestResponse } from '../utils/request';
import { LoginPayload } from '../actions/user';

export function login(payload: LoginPayload): RequestResponse {
  return request.post('/login', payload);
}
