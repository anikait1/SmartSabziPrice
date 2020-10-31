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
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";

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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          marginBottom={4}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h5" component="h1" style={{ marginRight: 8 }}>
              Sector 24, Chandigarh
            </Typography>
            <EditLocationOutlinedIcon fontSize="large" />
          </Box>
          <ButtonGroup
            variant="outlined"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button startIcon={<CreateOutlinedIcon />}>New</Button>
            <Button startIcon={<InfoOutlinedIcon />}>Info</Button>
          </ButtonGroup>
        </Box>
        <PricePostLayout itemId={id} />
      </Container>
    );
  }
};

export default Details;
