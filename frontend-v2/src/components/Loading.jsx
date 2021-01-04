import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Grid
      style={{ height: "100vh" }}
      container
      alignItems="center"
      justify="center"
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
