
import React, { useState, useEffect } from "react";
import { Auth } from "../components/Auth";
export const AuthPage=({modalOpen,handleClose})=>{
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
    return(
    <Auth
    modalOpen={modalOpen}
    handleClose={handleClose}
    changeHandler={changeHandler}
    form={form}
    formErrors={formErrors}
    />
    )
    

}