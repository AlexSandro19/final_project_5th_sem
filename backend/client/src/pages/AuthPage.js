
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Auth } from "../components/Auth";
import { loginRequest } from "../redux/actions/auth";

const AuthPage=({requesting,successful,modalOpen,handleClose,loginRequest})=>{
    const [formErrors, setFormErrors] = useState({});
    // useEffect(()=>{
    //   if(domain){
    //     setForm({
    //       domain:domain,
    //       tag:"",
    //       location_language:"",
    //     })
    //   }
    // },[domain])
    // useEffect(() => {
    //   if (errors) {
        
    //     errors.forEach((error) => {
    //       console.log(error);
    //       setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
    //     });
    //   }
    // }, [errors]);
    const [form, setForm] = useState({
        email: "",
        password:"",
      });
      
      const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };
      const submitHandler = async (event) => {
        console.log(event)
        event.preventDefault();
        loginRequest(form);
        handleClose(false);
       //setFormErrors({});
      };


    return(
    <Auth
    modalOpen={modalOpen}
    handleClose={handleClose}
    changeHandler={changeHandler}
    submitHandler={submitHandler}
    form={form}
    formErrors={formErrors}
    />
    )
    

}
const mapStateToProps = (state) => {
    return {
      requesting:state.auth.requesting,
      successful:state.auth.successful
    }
}
export default connect(mapStateToProps,{loginRequest})(AuthPage)
