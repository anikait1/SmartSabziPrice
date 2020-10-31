import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[400],
    marginRight: theme.spacing(1)
  },
  likes: {
    marginLeft: "auto",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  infoBox: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      marginRight: theme.spacing(1),
    },
  },
  cardActionsPadding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const MaterialPriceCard = ({ user, itemBill, location, time }) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <Card>
      <Box
        display="flex"
        alignItems="baseline"
        justifyContent="center"
        color="white"
        bgcolor="#595b83"
        boxShadow={1}
        paddingTop={1}
        paddingBottom={1}
      >
        <Typography
          variant="h5"
          component="h3"
          align="center"
          display="inline"
          style={{ marginRight: 5 }}
        >
          &#x20B9; {itemBill.price}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          align="center"
          display="inline"
        >
          / Kg
        </Typography>
      </Box>
      <CardContent>
        <Box className={classes.infoBox}>
          <LocalMallOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            {`${itemBill.quantity} ${itemBill.quantityType}`}
          </Typography>
        </Box>
        <Box className={classes.infoBox} marginTop={1} marginBottom={1}>
          <ExploreOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            {`${location.pincode}, ${location.city}`}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <EventOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            {time.split("T")[0]}
          </Typography>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing className={classes.cardActionsPadding}>
        <Avatar aria-label="price post" className={`${classes.small} ${classes.avatar}`}>
          {user.username[0].toUpperCase()}
        </Avatar>
        <Typography variant="subtitle2" component="span">
          {user.username}
        </Typography>
        <IconButton
          aria-label="like the price"
          className={classes.likes}
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
          color="inherit"
          size="small"
        >
          {clicked ? (
            <FavoriteOutlinedIcon fontSize="small"/>
          ) : (
            <FavoriteBorderOutlinedIcon fontSize="small"/>
          )}
        </IconButton>
        <Typography variant="subtitle2" component="h6">
          15000
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MaterialPriceCard;
