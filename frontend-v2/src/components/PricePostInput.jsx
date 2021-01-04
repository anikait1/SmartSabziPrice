import { React, useState, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import PersonIcon from "@material-ui/icons/Person";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PricePostInput = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currency, setCurrency] = useState("EUR");

  const currencies = [
    {
      value: "Kilogram",
      label: "Kg",
    },
    {
      value: "Gram",
      label: "Gm",
    },
    {
      value: "Dozen",
      label: "Dozen",
    },
  ];

  return (
    <div>
      <Dialog
        open={props.display}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Price"
                id="price"
                type="Number"
                fullWidth
                size="small"
                helperText="Enter price"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">&#x20B9;</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Quantity"
                id="quantity"
                helperText="Enter quantity"
                type="Number"
                fullWidth
                size="small"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalMallOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="quantity-category"
                select
                label="Weight"
                value={currency}
                onChange={handleChange}
                size="small"
                fullWidth
                variant="outlined"
                helperText="Select weight category"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                id="location"
                helperText="Confirm Location"
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ExploreOutlinedIcon size="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="User"
                id="user"
                helperText="Current user"
                fullWidth
                variant="outlined"
                size="small"
                value="Anikait"
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon size="small" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Item"
                id="item"
                helperText="Selected item"
                fullWidth
                variant="outlined"
                size="small"
                value="Pineapple"
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalGroceryStoreIcon size="small" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.close}
            color="secondary"
            fullWidth
            startIcon={<CloseIcon />}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={props.close}
            color="primary"
            fullWidth
            startIcon={<DoneIcon />}
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PricePostInput;
