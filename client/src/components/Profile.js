import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField,Grid,Divider, Typography,Button, TableHead, TableCell,TableBody,TableRow,Table } from "@mui/material";
const useStyles=makeStyles(()=>({
    back:{
        margin:"1%",
        backgroundColor:"#D7CD79",
        flexGrow:2,
        width: '600px',
        height: '100%',
        paddingBottom:"7%",
    },
    card:{
       
        marginTop:"10%",
        marginLeft:"5%",
        width:"90%",
    },
    carousel:{
        margin:"1%",
        backgroundColor:"#D7CD79",
        flexGrow:2,
        width: '600px',
        height: '100%',
        paddingBottom:"7%",
    },

}))

export const Profile=({user,form,sendProfileUpdateForm,changeHandler})=>{
const classes=useStyles();
console.log(user.orders)
const orderList=[...user.orders];
console.log(orderList);
return(
    <div>

    
       <Box component="form"
       autoComplete="off"
       width="1000px"
       onSubmit={sendProfileUpdateForm}
       >
           
           <div>
           
           
           <Grid container spacing={4}>
               <Grid item xs={12}>
               <Typography style={{width:"100%",textAlign:"center"}} variant="h2">ORDERS</Typography>
               <Table>
                   <TableHead>
                 
                       <TableRow>
                           <TableCell>ID </TableCell>
                           <TableCell>Date ordered </TableCell>
                           <TableCell>Date sent </TableCell>
                           <TableCell>Date delivered </TableCell>
                           <TableCell>Total Value </TableCell>
                           <TableCell>Message </TableCell>
                           <TableCell>Items </TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                   {orderList.map((order,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{order.ordered}</TableCell>
                            <TableCell>{order.sent}</TableCell>
                            <TableCell>{order.delivered}</TableCell>
                            <TableCell>{order.totalValue}</TableCell>
                          { order.message === "" ?(<TableCell>No message provided</TableCell>):(<TableCell>{order.message}</TableCell>)}
                          <TableCell>
                              <Button style={{color:"black",backgroundColor:"#FDFFEE",borderRadius: "6px"}}>View Items</Button>
                        </TableCell>
                        </TableRow>
                    )

                     })}
                   </TableBody>
               </Table>
            </Grid>
            
            <Divider style={{margin:"5%"}} />
           
   
           <Grid item xs={12}><Typography style={{width:"100%",textAlign:"center"}} variant="h2">UPDATE</Typography></Grid>
           <Grid item xs={12}><TextField type="email" value={form.email} onChange={changeHandler} style={{width:"100%"}} required label="Email" id="email" name="email" ></TextField></Grid>
           <Grid item xs={6}><TextField type="text" value={form.username} onChange={changeHandler} style={{width:"100%"}}  required label="Username" id="username" name="username"></TextField></Grid>
           <Grid item xs={6}><TextField type="text" value={form.name} onChange={changeHandler} style={{width:"100%"}}  label="Name" id="name" name="name"></TextField></Grid>
           <Grid item xs={12}><TextField type="password" value={form.password} onChange={changeHandler} style={{width:"100%"}}  required label="Password" id="password" name="password" ></TextField></Grid>
           <Grid item xs={12}><TextField type="password" onChange={changeHandler} style={{width:"100%"}}  required label="Confirm password" required id="passwordConfirm" name="passwordConfirm" ></TextField></Grid>
           <Grid item xs={12}><TextField type="tel" value={form.phone} onChange={changeHandler} style={{width:"100%"}} required label="Phone number" id="phone" name="phone"></TextField></Grid>
           <Grid item xs={12}><TextField type="tel" value={form.phone} onChange={changeHandler} style={{width:"100%"}} required label="Phone number" id="phone" name="phone"></TextField></Grid>
           
           <Grid item xs={12}><TextField type="text" onChange={changeHandler} multiline value={form.address} style={{width:"100%"}}  label="Address" id="address" name="address"></TextField></Grid>
           <Grid item xs={12}>
           <Button 
           variant="contained"
           color="primary" 
           type="submit"
           >
               Update
           </Button>
           </Grid>
   
           </Grid>
           <Divider/>
           </div>
           
       </Box>
       </div>

   
)


}