import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { TextField, Box, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { contactFormRequest } from "../redux/actions/contact";

const useStyles = makeStyles((theme) => ({
   
    formEmail: {
        margin: "0",
        color: "#989898",
        textAlign: "center",
        border: "2px solid #ccc",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
    }, 
   
  }));

const ContactForm = ({messageResponse, contactFormRequest}) => {
    const history=useHistory();
    const [form,setForm] = useState({
        firstName:" ",
        lastName:" ",
        email:" ",
        subject:" ",
        message:" ",
    })
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };
    const classes = useStyles();
    const sendEmail = async (event) => {
        event.preventDefault();
        contactFormRequest(form)

    }
    const goBack=()=>{
        history.goBack();
      }
    return (
        <div>
    
        <form className ={classes.formEmail} noValidate onSubmit={sendEmail} >
            <TextField sx={{ marginBottom: '15px' }}
            label="First-Name"
            required
            id = "outlined"
            value={form.firstName}
            name = "firstName"
            onChange={changeHandler}
            />
            <TextField sx={{ marginBottom: '15px' }}
            label="Last-Name"
            required
            id = "outlined"
            value={form.lastName}
            name = "lastName"
            onChange={changeHandler}
            />
            <TextField sx={{ marginBottom: '15px' }}
            label="Email"
            required
            onChange={changeHandler}
            value={form.email}
            type="email" 
            name="email"
            />
            
            <TextField sx={{ marginBottom: '15px' }}
            label="Subject"
            required
            onChange={changeHandler}
            value={form.subject}
            type="text" 
            name="subject"
            />
            <TextField sx={{ marginBottom: '15px' }}
            label="Message"
            required
            value={form.message}
            onChange={changeHandler}
            type="text" 
            name="message"
            multiline
            rows={5}
            />
                <Button 
            type="submit" color="primary" variant="contained">Submit</Button> 

        </form>
        <Button onClick={goBack} variant="outlined">Back</Button>
        </div>
          
    )
}

const mapStateToProps = (state) => {
    return { messageResponse: state.contact.message }
}

export default connect(mapStateToProps, { contactFormRequest })(ContactForm)
