import { USER_SET, USER_UNSET } from "../constants/user";

const initialState = {
  isAuthenticated: false,
  hasWarranty: false, 
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case USER_SET:
      return {
        isAuthenticated: true,
        hasWarranty: true,
      };

    default:
      return state;
  }
};
export default reducer;
