import { LOGIN_REQUESTING } from "../constants/auth";

export const loginRequest = ({ email, password }) => {
    console.log(email);
    console.log(password)
  return {
    type: LOGIN_REQUESTING,
    payload: { email, password },
  };
};

