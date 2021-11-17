import { USER_SET, USER_UNSET } from "../constants/user";

export const setUser = (token, userId, role, exp,username,name,email,phone,address,cart,emailConfirmed) => {
  return {
    type: USER_SET,
    message: {
      text: "Successfully logged in!",
      severity: "success",
    },
    payload: { token, userId,username,name,email,phone,address,cart,emailConfirmed, role, exp },
  };
};

export const unsetUser = () => {
  return {
    type: USER_UNSET,
  };
};
