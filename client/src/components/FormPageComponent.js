import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import { TextField, Button, Typography, Paper, InputLabel, Select,MenuItem } from "@mui/material";
import FileBase from 'react-file-base64';
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


        // console.log(currentId, postData);
        

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
        // console.log("updated item: ", item);
        setCurrentItem(item);
    }


    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{false ? 'Editing' : 'Creating'} an Item</Typography>
                <TextField name="name" variant="outlined" 
                           label="Name" fullWidth value={currentItem.name} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, name: e.target.value })} />
                <TextField name="description" variant="outlined" 
                           label="Description" fullWidth value={currentItem.description} multiline
                           onChange={(e) => updateCurrentItem({ ...currentItem, description: e.target.value })} />
                <TextField name="price" variant="outlined" 
                           label="Price" fullWidth value={currentItem.price} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, price: e.target.value })} />
                <TextField name="quantity" variant="outlined" 
                           label="Quantity" fullWidth value={currentItem.quantity} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, quantity: e.target.value })} />
                <TextField name="categoryArray" variant="outlined" 
                           label="Categories (put ',' between them)" fullWidth value={currentItem.categoryArray} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, categoryArray: e.target.value.split(',') })} />
                <TextField name="materialArray" variant="outlined" 
                           label="Materials  (put ',' between them)" fullWidth value={currentItem.materialArray} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, materialArray: e.target.value.split(',') })} />

                <InputLabel id="has-warranty">Warranty</InputLabel>
                <Select
                    labelId="has-warranty"
                    id="has-warranty-option"
                    value={currentItem.hasWarranty}
                    // defaultValue={currentItem.hasWarranty}
                    label="Warranty"
                    onChange={(e) => updateCurrentItem({ ...currentItem, hasWarranty: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
                <InputLabel id="is-popular">Popular</InputLabel>
                <Select
                    labelId="is-popular"
                    id="is-popular-option"
                    value={currentItem.isPopular}
                    // defaultValue={currentItem.hasWarranty}
                    label="Popular"
                    onChange={(e) => updateCurrentItem({ ...currentItem, isPopular: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
                <InputLabel id="in-stock">Popular</InputLabel>
                <Select
                    labelId="in-stock"
                    id="in-stock-option"
                    value={currentItem.stock}
                    // defaultValue={currentItem.hasWarranty}
                    label="In Stock"
                    onChange={(e) => updateCurrentItem({ ...currentItem, stock: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>

          
                <FileBase 
                    type="file"
                    multiple={true}
                    onDone={(receivedPics) => {
                            const picturesArray = receivedPics.map(pic => pic.base64); 
                            updateCurrentItem({ ...currentItem, picturesArray });
                            }}
                />
                           
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