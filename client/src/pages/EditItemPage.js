import { connect } from "react-redux";
import {useState} from "react";
import { EditItem } from "../components/EditItem";

const EditItemPage=({currentItem})=>{
    return(
        <EditItem currentItem={currentItem}>
        </EditItem>
    )


}

const mapStateToProps = (state) => {
    return {
        currentItem:state.items.currentItem
    };
  };
  
export default connect(mapStateToProps,{})(EditItemPage)