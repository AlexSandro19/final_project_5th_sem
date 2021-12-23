import { connect } from "react-redux";
import {useState} from "react";
import { EditOrder } from "../components/EditOrder";

const EditOrderPage=({currentItem,currentOrder})=>{
    console.log(currentItem)
    return(
        <EditOrder currentItem={currentItem}>
        </EditOrder>
    )


}

const mapStateToProps = (state) => {
    return {
        currentItem:state.items.currentItem,
        currentOrder:state.order
    };
  };
  
export default connect(mapStateToProps,{})(EditOrderPage)