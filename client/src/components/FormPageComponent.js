import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import { TextField, Button, Typography, Paper, InputLabel, Select,MenuItem } from "@mui/material";
// import FileBase from 'react-file-base64';
import {updateItem, createItem} from "../redux/actions/item";

const FormPageComponent = ({ currentItem, setCurrentItem, updateItem }) => {
const [form, setForm] = useState({name: ""});

    // const [postData, setPostData] = useState({creator:'', title:'', message:'', tags:'', selectedFile:''});

    // const post = useSelector( (state) => currentId ? state.posts.find((p) => p._id === currentId) : null); 
    // const classes = useStyles();
 
    // useEffect(() => {
    //     if(post) {setPostData(post)};
    // }, [post])

    const handleSubmit = (e) => { // e = event
        updateItem(currentItem);
        e.preventDefault();


        

        // if(currentId){
        //     dispatch(updatePost(currentId, postData));
        // }else{
        //     dispatch(createPost(postData));
        // }

        clear();
    }
    const clear = () => {
        // setCurrentId(null);
        // setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''});
    }

    const updateCurrentItem = (item) => {
        setCurrentItem(item);
    }


    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{false ? 'Editing' : 'Creating'} an Item</Typography>
                <TextField name="name" variant="outlined" 
                           label="Name" fullWidth value={currentItem.name} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, name: e.target.value })} />
                <TextField name="price" variant="outlined" 
                           label="Price" fullWidth value={currentItem.price} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, price: e.target.value })} />
                <TextField name="quantity" variant="outlined" 
                           label="Quantity" fullWidth value={currentItem.quantity} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, quantity: e.target.value })} />
                <TextField name="categoryArray" variant="outlined" 
                           label="CategoryArray" fullWidth value={currentItem.categoryArray} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, categoryArray: e.target.value.split(',') })} />

<InputLabel id="demo-simple-select-label">Warranty</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currentItem.hasWarranty}
    // defaultValue={currentItem.hasWarranty}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value={true}>Yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
  </Select>

                {/* <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => updateCurrentItem({ ...currentItem, selectedFile:base64 })}
                    />
                </div>            */}
                <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        itemsInBasket: state.basket.itemsInBasket, 
        userIsAuthenticated: state.user.isAuthenticated,
    };
};

export default connect(mapStateToProps, {setCurrentItem, updateItem})(FormPageComponent);