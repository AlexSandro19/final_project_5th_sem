import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import { TextField, Button, Typography, Paper, InputLabel, Select,MenuItem, Checkbox } from "@mui/material";
import FileBase from 'react-file-base64';
import {updateItem, createItem} from "../redux/actions/item";

const OrderDetailsComponent = ({ itemsInBasket, user }) => {
    const userProperties = Object.getOwnPropertyNames(user)
    const [form, setForm] = useState({...userProperties});
    // const [checked, setChecked] = useState(false);
    let checked = false

    const handleSubmit = (e) => { // e = event
        console.log("Details: ", form)
        e.preventDefault();

        clear();
    }
    const clear = () => {
    }

    const cancel = () => {

    }

    const checkboxPressed = () =>  {
        console.log("Checkbix pressed", checked)
        checked = !checked
        console.log("Checkbix pressed", checked)
        if (checked) {
            setForm({...user});
        }else {
            setForm({...userProperties})
            
        }
        console.log("Form ", form)

    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h3">Order Details</Typography>
                <Typography variant="h6">Customer Information</Typography>
                <Checkbox
                    checked={checked}
                    onChange={checkboxPressed}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <TextField name="first-name" variant="outlined" 
                           label="First Name" fullWidth value={form.firstName} 
                           onChange={(e) => ({ ...form, firstName: e.target.value })} />
                <TextField name="last-name" variant="outlined" 
                           label="Last Name" fullWidth value={form.lastName} 
                           onChange={(e) => ({ ...form, lastName: e.target.value })} />
                <TextField name="email" variant="outlined" 
                           label="Email" fullWidth value={form.email} multiline
                           onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <TextField name="address" variant="outlined" 
                           label="Address" fullWidth value={form.address} 
                           onChange={(e) => setForm({ ...form, address: e.target.value })} />
                <TextField name="phone" variant="outlined" 
                           label="Phone" fullWidth value={form.phone} 
                           onChange={(e) => setForm({ ...form, phone: e.target.value })} />       
                <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={cancel} fullWidth>Cancel</Button>
            </form>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        // itemsInBasket: state.basket.itemsInBasket, 
        // userIsAuthenticated: state.user.isAuthenticated,
    };
};

export default connect(mapStateToProps, {})(OrderDetailsComponent);