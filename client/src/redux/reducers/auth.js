import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../constants/auth";
  import {USER_UNSET} from "../constants/user"
  const initialState = {
    requesting: false,
    successful: false,
    errors: [],
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case LOGIN_REQUESTING:
        
        return {
          requesting: true,
          successful: false,
          errors: [],
        };
      case LOGIN_SUCCESS:
        return {
          errors: [],
          requesting: false,
          successful: true,
        };
      case LOGIN_FAILURE:
        return {
          errors: action.errors,
          requesting: false,
          successful: false,
        };
      case USER_UNSET:
        return{
          errors:[],
          requesting:false,
          successful:false
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  