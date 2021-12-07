import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, SET_CURRENT_ITEM, SET_FILTERED_ITEMS } from "../constants/item";

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

const initialState = {items: [], currentItem:{}, filteredItems:[] };


const reducer = (state = initialState, action) => {
  console.log("In the Item Reducer", action.type);
  switch (action.type) {
    case REQUEST_ALL_ITEMS_SUCCESS:
      return {
          items: action.payload,
          currentItem: {},
      };
    case REQUEST_ALL_ITEMS:
      return {
        items: [],
        currentItem: {},
      };
    case SET_CURRENT_ITEM:
      return {
        items: [],
        currentItem: action.payload,
      };
    
    case SET_FILTERED_ITEMS:
      return {
        filteredItems: action.payload,
      };
    
    default:
      return state;
  }
};
export default reducer;
