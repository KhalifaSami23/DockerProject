import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//ICONS
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    paddingTop: 64,
    paddingRight: 32,
    paddingLeft: 32
  },
  card:{
    borderRadius: 15,
    transition: '0.5s ease',
    '&:hover': {
      cursor: "pointer",
      transform: 'scale(1.1)',
      transition: '0.5s ease'
    }
  },
  CardMedia: {
    padding: 4,
  },
}));

const posts = [
  {
    _id: "1",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "2",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "3",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "4",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "5",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "6",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
  {
    _id: "7",
    username: "hkhattabi",
    postTitle: "Mes vacanes au Maroc",
    createdAt: Date.now(),
    description: "Vacances de malade avec mimoun le bg",
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      {posts.map((post) => (
        <Grid key={post._id} container item xs={6} sm={6} md={4} lg={3} xl={2}>
          <Card elevation={4} className={classes.card}>
            <CardHeader
              avatar={<Avatar>H</Avatar>}
              title={post.postTitle}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardMedia
                component="img"
                src="https://www.yonder.fr/sites/default/files/news/GettyImages-986294508.jpg"
              />
            </Grid>
            <CardContent>
              <Typography paragraph>{post.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Home;
