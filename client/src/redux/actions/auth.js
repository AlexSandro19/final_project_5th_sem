import { LOGIN_REQUESTING } from "../constants/auth";

export const loginRequest = ({ email, password }) => {
  return {
    type: LOGIN_REQUESTING,
    payload: { email, password },
  };
};

