import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const Item = ({ name, category, id }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Cherry"
        src="https://fruityvice.com/images/cherry.png"
        style={{ backgroundColor: "lightgrey" }}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" align="center">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          size="small"
          startIcon={<LocalOfferIcon />}
          fullWidth
        >
          Price
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
