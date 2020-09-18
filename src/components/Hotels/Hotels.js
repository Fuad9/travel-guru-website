import React, { useState } from "react";
import hotels from "../fakeData/hotelData";
import Map from "./Map";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

const Hotels = () => {
  const [hotel, setHotel] = useState([]);
  const [expanded, setExpanded] = useState(false);

  // search event listener
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.value.toLowerCase();
    const matched = hotels.filter(
      (item) =>
        item.category.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText)
    );
    setHotel(matched);
  };

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="w-75">
          <input
            onKeyUp={handleSearch}
            type="text"
            placeholder="Search your hotel by place name"
          />
          {hotel.map((elem) => (
            <Card className={classes.root}>
              <CardHeader title={elem.title} />
              <CardMedia className={classes.media} image={elem.img} />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography>{elem.star}</Typography>
                <Typography>Price: ${elem.price}</Typography>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{elem.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </div>
        <Map></Map>
      </div>
    </>
  );
};

export default Hotels;
