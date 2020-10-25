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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  likes: {
    marginLeft: "auto",
  },
}));

const MaterialPriceCard = ({ user, itemBill, location, time }) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <Card>
      <CardMedia
        className={classes.media}
        component="img"
        src="https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png"
        title="Paella dish"
        height={100}
      />
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
        <List dense={true}>
          <ListItem disableGutters>
            <ListItemIcon style={{ minWidth: 40 }}>
              <ExploreOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {`${location.pincode}, ${location.city}`}
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon style={{ minWidth: 40 }}>
              <LocalMallOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {`${itemBill.quantity} ${itemBill.quantityType}`}
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Typography variant="h5" component="h5">
          &#8377; {itemBill.price}
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
        <Typography variant="subtitile1" component="h6" color="textSecondary">
          255
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MaterialPriceCard;
