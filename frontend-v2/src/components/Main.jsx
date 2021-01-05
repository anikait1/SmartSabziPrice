import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Loading from "./Loading";
import ItemSearch from "./ItemSearch";
import Item from "./Item";

const _fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const _vegetables = [1, 2, 3, 4, 5, 6, 7, 8];

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

const Main = () => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  const getFruits = () => {
    fetch("http://localhost:5000/items/fruits")
      .then((res) => res.json())
      .then(
        (result) => {
          setFruits(result.data);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const getVegetables = () => {
    fetch("http://localhost:5000/items/vegetables")
      .then((res) => res.json())
      .then(
        (result) => {
          setVegetables(result.data);
          console.log(result);
          setIsLoaded(true);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    getFruits();
    getVegetables();
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Container>
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
      >
        <ItemSearch fruits={fruits} vegetables={vegetables} />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" align="center">
            Fruits
          </Typography>
        </Grid>
        {fruits.map((i) => (
          <Grid item key={i._id} xs={6} md={4} lg={2}>
            <Item name={i.name} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" align="center">
            Vegetables
          </Typography>
        </Grid>
        {vegetables.map((i) => (
          <Grid item key={i._id} xs={6} md={4} lg={2}>
            <Item name={i.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
