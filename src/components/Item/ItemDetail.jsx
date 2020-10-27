import React from "react";
import PricePostLayout from "../PricePost/PricePostLayout";
import PricePostInput from "../PricePost/PricePostInput";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ItemInfo from "./ItemInfo";


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
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} style={{maxWidth: 350}}>
            <ItemInfo item={item} />
            <PricePostInput />
          </Grid>
          <Grid item xs={12} lg={8}>
            <PricePostLayout itemId={id} />
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default Details;
