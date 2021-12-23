import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import { TextField, Button, Typography,Box, Paper, InputLabel, Select,MenuItem } from "@mui/material";
// import FileBase from 'react-file-base64';
import {updateItem, createItem} from "../redux/actions/item";

const FormPageComponent = ({ functionUse,currentItem, setCurrentItem, updateItem }) => {
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
        <Box>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{functionUse ? 'Editing' : 'Creating'} an Item</Typography>
                <TextField name="name"
                           label="Name" fullWidth value={currentItem.name} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, name: e.target.value })} />
                                <TextField multiline variant="outlined" name="description"
                           label="Description" fullWidth value={currentItem.description} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, description: e.target.value })} ></TextField>
                <TextField name="price" variant="outlined" 
                           label="Price" fullWidth value={currentItem.price} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, price: e.target.value })} />
                <TextField name="quantity" variant="outlined" 
                           label="Quantity" fullWidth value={currentItem.quantity} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, quantity: e.target.value })} />
                <TextField name="categoryArray" variant="outlined" 
                           label="Category Array" fullWidth value={currentItem.categoryArray} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, categoryArray: e.target.value.split(',') })} />
                 <TextField name="materialArray" variant="outlined" 
                           label="Material Array" fullWidth value={currentItem.materialArray} 
                           onChange={(e) => updateCurrentItem({ ...currentItem, materialArray: e.target.value.split(',') })} />
                <InputLabel id="demo-simple-select-label">Warranty</InputLabel>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="hasWarranty"
                        value={currentItem.hasWarranty}
                        // defaultValue={currentItem.hasWarranty}
                        label="Warranty"
                         onChange={(e)=>{updateCurrentItem({...currentItem,hasWarranty:e.target.value})}}
                >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                    <InputLabel id="demo-simple-select-label">Popular</InputLabel>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="isPopular"
                        value={currentItem.isPopular}
                        // defaultValue={currentItem.hasWarranty}
                        label="Popular"
                         onChange={(e)=>{updateCurrentItem({...currentItem,isPopular:e.target.value})}}
                >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                </Select>
                <InputLabel id="demo-simple-select-label">Stock</InputLabel>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="stock"
                        value={currentItem.stock}
                        // defaultValue={currentItem.hasWarranty}
                        label="Stock"
                         onChange={(e)=>{updateCurrentItem({...currentItem,stock:e.target.value})}}
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
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        itemsInBasket: state.basket.itemsInBasket, 
        userIsAuthenticated: state.user.isAuthenticated,
    };
};

export default connect(mapStateToProps, {setCurrentItem, updateItem})(FormPageComponent);