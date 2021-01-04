import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import PricePost from "./PricePost";

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

const Profile = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <Avatar className={classes.large}>H</Avatar>
          </Box>
          <Typography
            variant="h5"
            component="h4"
            align="center"
            className={classes.name}
          >
            Your Name
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1"> Account Status</Typography>
            <Chip
              label="Account Confirmed"
              color="primary"
              size="small"
              icon={<DoneIcon />}
            />
          </Box>
          <Divider className={classes.name} />
          <Box display="flex">
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="dense"
              classesName={classes.marginRight}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="dense"
              className={classes.marginLeft}
            />
          </Box>
          <TextField
            label="Email"
            margin="dense"
            variant="outlined"
            type="email"
            fullWidth
          />
          <Box display="flex">
            <TextField
              label="Old Password"
              variant="outlined"
              fullWidth
              margin="dense"
              type="password"
              classesName={classes.marginRight}
            />
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              margin="dense"
              type="password"
              className={classes.marginLeft}
            />
          </Box>
          <Box textAlign="center" marginTop={2}>
            <Button color="primary" variant="contained">
              Update
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <PricePost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PricePost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PricePost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PricePost />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
