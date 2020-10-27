import React from "react";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Chip } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: 10
  },
}));

const ItemInfo = (props) => {
  const classes = useStyles();
  const { name, mainImgUrl, description, nutrition } = props.item;
  return (
    <Card style={{ marginBottom: 25 }}>
      <CardMedia component="img" alt={name} src={mainImgUrl} title={name} />
      <CardContent>
        <Typography
          variant="h4"
          component="h4"
          style={{ fontWeight: 700 }}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          gutterBottom
          paragraph
          color="textSecondary"
        >
          {description}
        </Typography>
        <Divider />
        <div className={classes.root}>
        {Object.keys(nutrition).map((nutritionVal, key) => (
            <Tooltip title={nutritionVal.toUpperCase()}>
              <Chip color="primary" avatar={<Avatar>{nutritionVal[0].toUpperCase()}</Avatar>} label={nutrition[nutritionVal]} key={key} />
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemInfo;
