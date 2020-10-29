import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { ListItemAvatar } from "@material-ui/core";
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  likes: {
    marginLeft: "auto",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatarWidth: {
    minWidth: theme.spacing(6)
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const MaterialPriceCard = ({ user, itemBill, location, time }) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="price post" className={classes.avatar}>
            {user.username[0].toUpperCase()}
          </Avatar>
        }
        title={user.username}
        subheader={time.split("T")[0]}
      />
      <Divider variant="middle" />
      <CardContent style={{paddingTop: 8, paddingBottom: 8}}>
        <div style={{display: "flex", alignItems: "center", marginBottom: 5}}>
          <LocalOfferOutlinedIcon fontSize="small" style={{marginRight: 12, color: "green"}}/>
          <Typography variant="subtitle1" component="h6" style={{fontWeight: "bold"}}>&#x20B9; {itemBill.price} / Kg</Typography>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <LocalMallOutlinedIcon fontSize="small" style={{marginRight: 12, color: "blue"}}/>
          <Typography variant="subtitle1" component="h6" style={{fontWeight: "bold"}}>{`${itemBill.quantity} ${itemBill.quantityType}`}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing style={{ paddingLeft: 16, paddingRight: 16 }}>
      <ExploreOutlinedIcon fontSize="small" style={{marginRight: 12}}/>
        <Typography variant="subtitle2" component="h6">
        {`${location.pincode}, ${location.city}`}
        </Typography>
        <IconButton
          aria-label="like the price"
          className={classes.likes}
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
        >
          {clicked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <Typography variant="subtitile2" component="h6" color="textSecondary">
          255
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MaterialPriceCard;
