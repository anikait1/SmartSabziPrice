import React from "react";
import PricePostLayout from "../PricePost/PricePostLayout";
import PricePostInput from "../PricePost/PricePostInput";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ItemInfo from "./ItemInfo";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchItemDetail = async () => {
      const _apiHost = "http://localhost:5000";
      const url = _apiHost + "/items/" + id;
      console.log(url);

      const response = await fetch(url);

      if (!response.ok) {
        setIsLoaded(true);
        setError(response.status);
        return;
      }

      setItem(await response.json());
      setIsLoaded(true);
    };

    fetchItemDetail();
  }, [id]);

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <Grid container spacing-xs={2} spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
          <form noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Location"
                />
              </form>
          </Grid>
          <Grid item={true} xs={12} sm={6} style={{"textAlign": "right"}}>
            <ButtonGroup
              variant="outlined"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button fullWidth={true} startIcon={<CreateOutlinedIcon />}>New</Button>
              <Button fullWidth={true} startIcon={<InfoOutlinedIcon />}>Info</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
          <PricePostLayout itemId={id} />
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default Details;
