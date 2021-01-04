import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#595b83",
    padding: theme.spacing(1),
  },

  infoBox: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      marginRight: theme.spacing(1),
    },
    marginBottom: theme.spacing(1),
  },
}));

const PricePost = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title="&#x20B9; 120"
        titleTypographyProps={{
          variant: "h5",
          component: "h3",
          display: "inline",
          color: "inherit",
        }}
        subheader=" / Kg"
        subheaderTypographyProps={{
          variant: "subtitle2",
          component: "p",
          display: "inline",
          color: "inherit",
        }}
      />
      <CardContent>
        <Box className={classes.infoBox}>
          <LocalMallOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            2 Kilogram
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <LocalOfferOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            &#x20B9; 240
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <ExploreOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            Sector 37 Chandigarh
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <EventOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" component="h6">
            12-10-2020
          </Typography>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Avatar aria-label="username">R</Avatar>
        <Typography variant="body1" component="span">
          Rohan
        </Typography>
        <IconButton
          aria-label="like the price"
          style={{ marginLeft: "auto" }}
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
          color="inherit"
          size="small"
        >
          {clicked ? (
            <FavoriteOutlinedIcon fontSize="small" />
          ) : (
            <FavoriteBorderOutlinedIcon fontSize="small" />
          )}
        </IconButton>
        <Typography variant="subtitle2" component="h6">
          15000
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PricePost;
