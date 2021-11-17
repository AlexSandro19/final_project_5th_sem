import { USER_SET, USER_UNSET } from "../constants/user";

const initialState = {
  isAuthenticated: false,
  id: null,
  token: null,
  role: null,
  exp: null,
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case USER_SET:
      return {
        isAuthenticated: true,
        id: action.payload.userId,
        token: action.payload.token,
        role: action.payload.role,
        exp: action.payload.exp,
      };
    case USER_UNSET:
      return {
        isAuthenticated: false,
        id: null,
        token: null,
        exp: null,
        role: null,
      };
    default:
      return state;
  }
};
export default reducer;
