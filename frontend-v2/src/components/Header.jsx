import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ItemSearch from "./ItemSearch";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },

  large: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    fontSize: "2.5rem",
  },

  name: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  marginRight: {
    marginRight: theme.spacing(1),
  },

  marginLeft: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      
    </Navbar>
  );
};

export default Header;
