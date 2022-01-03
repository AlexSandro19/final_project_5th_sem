import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import { TextField, Button, Typography, Paper, InputLabel, Select,MenuItem, Checkbox, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import FileBase from 'react-file-base64';
import {updateItem, createItem} from "../redux/actions/item";
import PaypalCheckoutButton from './PaypalCheckoutButton';

const OrderDetailsComponent = ({ user }) => {

    console.log(" In OrderDetailsComponent, user ", user);
    const cart = user.cart;
    console.log("In OrderDetailsComponent cart", cart )
    // const userProperties = Object.getOwnPropertyNames(user)
    const [form, setForm] = useState({...user});

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
            // setForm({...userProperties})
            
        }
        console.log("Form ", form)

    }

    const capitalizeString = (initialStr) => {
        return initialStr
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    };


    return (
        <>
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h3">Order Details</Typography>
                <Typography variant="h6">Customer Information</Typography>
                <Checkbox
                    checked={checked}
                    onChange={checkboxPressed}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <TextField name="first-name" variant="outlined" disabled
                           label="First Name" fullWidth value={form.firstName} 
                           onChange={(e) => ({ ...form, firstName: e.target.value })} />
                <TextField name="last-name" variant="outlined" disabled
                           label="Last Name" fullWidth value={form.lastName} 
                           onChange={(e) => ({ ...form, lastName: e.target.value })} />
                <TextField name="email" variant="outlined" disabled
                           label="Email" fullWidth value={form.email} multiline
                           onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <TextField name="address" variant="outlined" disabled
                           label="Address" fullWidth value={form.address} 
                           onChange={(e) => setForm({ ...form, address: e.target.value })} />
                <TextField name="phone" variant="outlined" disabled
                           label="Phone" fullWidth value={form.phone} 
                           onChange={(e) => setForm({ ...form, phone: e.target.value })} />       
            </form>
        </Paper>
        <Typography variant="h6">Chosen Items</Typography>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="items-table">
  <TableHead>
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell align="right">Quantity</TableCell>
      <TableCell align="right">Unit Price</TableCell>
      <TableCell align="right">Total Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {cart.map((item) => (
      <TableRow
        key={item.itemName}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {capitalizeString(item.itemName)}
        </TableCell>
        <TableCell align="right">{item.quantityInCart}</TableCell>
        <TableCell align="right">{item.itemPrice}</TableCell>
        <TableCell align="right">{item.totalPerItem}</TableCell>
        
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>

    <PaypalCheckoutButton user={user}/>
</>
    );
}

const mapStateToProps = (state) => {
    return {
        // itemsInBasket: state.basket.itemsInBasket, 
        // userIsAuthenticated: state.user.isAuthenticated,
    };
};

export default connect(mapStateToProps, {})(OrderDetailsComponent);