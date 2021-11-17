import { Button } from "@mui/material";
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions } from "@mui/material";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
const theme = createTheme()
const useStyles = makeStyles(() => ({
    paper: {
      color:"#989898",
      margin: theme.spacing(15,0,0,50),

    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
   
      color:"#989898",
      width: "100%", // Fix IE 11 issue.

      marginTop: theme.spacing(1),
    },
    textField:{
      color:"#989898"
    },
    input:{
      color:"#989898",
    },
    submit: {
      margin: theme.spacing(3, 1, 2),
    },
  }));
export const Auth=({modalOpen,handleClose,form,submitHandler,changeHandler,formErrors})=>{
    const classes= useStyles();

    return(
        <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">New project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quis,
            esse dolore quod
          </DialogContentText>
          <TextField
            required={true}
            onChange={changeHandler}
            autoFocus
            value={form.email}
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            error={!!formErrors["email"]}
            helperText={formErrors["email"] ? formErrors["email"] : ""}
          />
          <TextField
            onChange={changeHandler}
            value={form.password}
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            error={!!formErrors["tag"]}
            helperText={formErrors["tag"] ? formErrors["tag"] : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      
    )
}