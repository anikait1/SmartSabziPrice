import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import Button from '@material-ui/core/Button';

const ItemCard = ({ id, name, calorieCount, imgLink }) => {
  return (
      <Card>
        <CardMedia src={imgLink} title={name} component="img" />
        <CardContent style={{paddingTop: 8, paddingBottom: 8}}>
          <Typography variant="subtitle2" component="p" align="center">{name}</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="outlined" size="small" href={`details/${id}`} fullWidth={true} startIcon={<LocalOfferOutlinedIcon />}>Price</Button>
        </CardActions>
      </Card>
  );
};

export default ItemCard;
