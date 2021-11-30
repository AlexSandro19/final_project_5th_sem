import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, SET_CURRENT_ITEM, ADD_ITEM_TO_BASKET } from "../constants/item";

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

const initialState = {items: [], currentItem:{}, itemsInBasket: []};


const reducer = (state = initialState, action) => {
  console.log("In the Reducer", action.type);
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
    case ADD_ITEM_TO_BASKET:
      return {
        items: [],
        itemsInBasket: [...initialState.itemsInBasket, action.payload],
      };
    
    default:
      return state;
  }
};
export default reducer;
