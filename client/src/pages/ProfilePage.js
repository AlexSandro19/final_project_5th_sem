import { connect } from "react-redux";
import { Profile } from "../components/Profile";
import { useHistory } from "react-router-dom";
import {useState} from "react";

 

const ProfilePage=({user})=>{
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

    return(
        <Profile user={user} form={form} sendProfileUpdateForm={sendProfileUpdateForm} changeHandler={changeHandler}/>
    )


}

const mapStateToProps = (state) => {
    return {
        user:state.user
    };
  };
  
export default connect(mapStateToProps,{})(ProfilePage)