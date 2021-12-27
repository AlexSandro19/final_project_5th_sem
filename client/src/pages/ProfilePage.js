import { connect } from "react-redux";
import { Profile } from "../components/Profile";
import { useHistory } from "react-router-dom";
import {useState} from "react";
import { DeleteDialog } from "../components/DeleteDialog";
import {setCurrentItem} from "../redux/actions/item"
import { getCurrentOrder } from "../redux/actions/order";
const ProfilePage=({user,items,setCurrentItem,getCurrentOrder})=>{
    const history = useHistory();
    const [form, setForm] = useState({
      email: user.email,
      username:user.username,
      name:user.name,
      password:"",
      phone:user.phone,
      address:user.address,  
    });
    const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
    const sendProfileUpdateForm= (e)=>{
      e.preventDefault();
  
      //registerUser(form);
      history.push("/");
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteOrderOpen, setDeleteOrderOpen] = useState(false);
    const handleDeleteItemOpen = () => {
      
      setModalOpen(true);
      };
      const handleDeleteOrderOpen = () => {
        setDeleteOrderOpen(true);
      };
      const handleClose = () => {
        setModalOpen(false);
        setDeleteOrderOpen(false);
      };
      console.log(deleteOrderOpen);
    return(
        <div>
        <Profile getCurrentOrder={getCurrentOrder} setCurrentItem={setCurrentItem} handleDeleteOrderOpen={handleDeleteOrderOpen}  handleDeleteItemOpen={handleDeleteItemOpen} items={items} user={user} form={form} sendProfileUpdateForm={sendProfileUpdateForm} changeHandler={changeHandler}>
        
        </Profile>
      
        <DeleteDialog text={"Item"} modalOpen={modalOpen} handleClose={handleClose}></DeleteDialog>
        <DeleteDialog text={"Order"} modalOpen={deleteOrderOpen} handleClose={handleClose}></DeleteDialog>
        
        </div>
        )


}

const mapStateToProps = (state) => {
    return {
        user:state.user,
        items:state.items.items
    };
  };
  
export default connect(mapStateToProps,{setCurrentItem,getCurrentOrder})(ProfilePage)