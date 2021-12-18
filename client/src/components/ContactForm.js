import React from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@mui/styles";
import { TextField, Box, CardContent, CardMedia, Button, Typography } from '@mui/material';

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

const ContactForm = () => {
    
    const classes = useStyles();
    
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_hysszfa', 'template_yesofn7', e.target, 'user_JRQFq2IyPmOHEaFKZB6Ta')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        e.target.reset();
    }
    
    return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <div>
                <form className = {classes.formEmail} onSubmit={sendEmail}>
                <TextField
            required
            id = "outlined"
            defaultValue="name"
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
                <TextField
            type="submit" 
            value="Send"
            />
                </form>
            </div>
        </Box>
    )
}

export default ContactForm
