import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS } from "../constants/item";

// const initialState = {

//   id: null,
//   name: "",
//   hasWarranty: false,
//   isPopular: false,
//   price: 0,
//   quantity: 0,
//   stock: false,
//   description: "",
//   categoryArray: [],
//   materialArray: [],

// };

const initialState = {items: []};

const reducer = (state = initialState, action) => {
  console.log("In the Reducer", action.payload);
  switch (action.type) {
    case REQUEST_ALL_ITEMS_SUCCESS:
      return {
          items: action.payload,
      };
    case REQUEST_ALL_ITEMS:
      return {
        items: [],
      };
    default:
      return state;
  }
};
export default reducer;
