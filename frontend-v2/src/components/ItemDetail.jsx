import { React, useState, useEffect, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const ItemDetail = (props) => {
  const [description, setDescription] = useState("");
  const [nutrition, setNutrition] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/items/5fd991232107f439dd465207")
      .then((res) => res.json())
      .then((result) => {
        setDescription(result.data.description);
        setNutrition(result.data.nutrition);
      });
  }, []);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        maxWidth="xs"
      >
        <DialogTitle id="dialog-title">Product Description</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <TableContainer component={Paper}>
            <Table className aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nutrition</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(nutrition).map((key) => (
                  <TableRow key={key}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ textTransform: "capitalize" }}
                    >
                      {key}
                    </TableCell>
                    <TableCell align="right">{nutrition[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.close}
            color="secondary"
            variant="contained"
            fullWidth
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemDetail;
