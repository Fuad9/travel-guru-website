import React, { useState } from "react";
import hotelData from "../fakeData/hotelData";
import Map from "./Map";
import { makeStyles, createStyles } from "@material-ui/core/styles";
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
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   maxWidth: 500,
    // },
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
  const { id } = useParams();

  // from user input
  // const [hotels, setHotels] = useState([]);
  const [expanded, setExpanded] = useState(false);

  // to show hotels directly
  const hotels = hotelData.filter((hotel) => hotel.category === id);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const searchText = event.target.value.toLowerCase();
  //   const matched = hotelData.filter(
  //     (item) =>
  //       item.category.toLowerCase().includes(searchText) ||
  //       item.title.toLowerCase().includes(searchText)
  //   );
  //   setHotels(matched);
  // };

  // const searchHotel = (
  //   <input
  //     className="form-control mt-3 w-75"
  //     onKeyUp={handleSearch}
  //     type="text"
  //     placeholder="Search your hotel by place name"
  //   />
  // );

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {hotels.map((hotel) => (
            <div className="col-9 col-md-6 col-lg-6">
              <Card className={classes.root}>
                <CardHeader title={hotel.title} />
                <CardMedia className={classes.media} image={hotel.img} />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <Typography>{hotel.star}</Typography>
                  <Typography>Price: ${hotel.price}</Typography>
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
                    <Typography paragraph>{hotel.description}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          ))}
          <Map id={id} />
        </div>
      </div>
    </>
  );
};

export default Hotels;
