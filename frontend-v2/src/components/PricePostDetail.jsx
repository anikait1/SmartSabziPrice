import { React, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PricePost from "./PricePost";
import PricePostInput from "./PricePostInput";
import CreateIcon from "@material-ui/icons/Create";
import InfoIcon from "@material-ui/icons/Info";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ItemDetail from "./ItemDetail";
import usePosition from "./usePosition";

const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    textAlign: "right",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  buttonWidth: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  container: {
    marginTop: theme.spacing(3),
  },
}));

const PricePostDetail = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [infoDialog, setInfoDialog] = useState(false);
  const { latitude, longitude, locationError } = usePosition();

  const handleInfoDialogOpen = () => {
    setInfoDialog(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialog(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const objectToQueryString = (obj) => {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  };

  const getPosts = () => {
    const _apiHost = "http://localhost:5000/items";
    const id = "5fd991232107f439dd465207";
    const url = `${_apiHost}/${id}/price-posts?${objectToQueryString({
      latitude,
      longitude,
    })}`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result.data);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    if (latitude && longitude && !locationError) {
      getPosts();
    } else {
      console.log(locationError);
    }
  }, [latitude, longitude, locationError]);

  return (
    <Container>
      <PricePostInput display={open} close={handleClose} />
      <ItemDetail open={infoDialog} close={handleInfoDialogClose} />
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        className={classes.container}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            id="current-location"
            size="small"
            variant="outlined"
            helperText="Current location"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ExploreOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.buttonAlign}>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
            className={classes.buttonWidth}
          >
            <Button
              startIcon={<CreateIcon />}
              onClick={handleClickOpen}
              className={classes.buttonWidth}
            >
              Create
            </Button>
            <Button
              startIcon={<InfoIcon />}
              onClick={handleInfoDialogOpen}
              className={classes.buttonWidth}
            >
              Info
            </Button>
          </ButtonGroup>
        </Grid>
        {posts.map((post, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <PricePost
              bill={post.bill}
              user={post.userID}
              likes={post.likes}
              location={post.location}
              time={post.createdAt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricePostDetail;
