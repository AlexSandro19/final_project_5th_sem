import React from "react";
import emailjs from "emailjs-com";
import { connect } from "react-redux";
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
    
    const classes = useStyles();
    const sendEmail = (name, email, subject, message) => {
        /*contactFormRequest()*/
        console.log(name)
        console.log(email)
        console.log(subject)
        console.log("called")
    }
    return (
       
                <form className = {classes.formEmail} >
                <TextField
            required
            id = "outlined"
            defaultValue="name"
            name = "name"
            />
                <TextField
            required
            defaultValue="email"
            type="email" 
            name="email"
            />
            
            <TextField
            required
            defaultValue="subject"
            type="text" 
            name="subject"
            />
                <TextField
            required
            defaultValue="message"
            type="text" 
            name="message"
            multiline
            rows={5}
            />
                <Button onClick={sendEmail}
            type="submit">Submit</Button> 

                </form>
          
    )
}

const mapStateToProps = (state) => {
    return { messageResponse: state.contact.message }
}

export default connect(mapStateToProps, { contactFormRequest })(ContactForm)
