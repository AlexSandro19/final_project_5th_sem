import { connect } from "react-redux";
import {CreateItem} from "../components/CreateItem";
import { createItem } from "../redux/actions/item";
import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
const CreateItemPage = ({errors,items,createItem})=>{
    const [formErrors,setFormErrors]=useState({});
    useEffect(() => {
        if (errors) {
         
        errors.forEach((error) => {
           console.log(error);
            setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
          });
        }
      }, [errors]);

    return(
        <CreateItem  formErrors={formErrors} errors={errors} items={items} createItem={createItem}>

        </CreateItem>
    )


}

const mapStateToProps = (state) => ({
    items:state.items.items,
    errors:state.message.errors
  });
  
 export default connect(mapStateToProps,{createItem})(CreateItemPage);