import { Paper, Grid } from "@material-ui/core";
import { withStyles , makeStyles} from '@material-ui/core/styles';
import React from "react";
import {styles} from "./card.style";
import Form from "./../form/form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Card({classes}) {
  const materialStyles = useStyles();
  return (
    <div className={materialStyles.root}>
      <Grid container spacing={3} xs={12} justify="center">
        <Grid item xs={12} sm={8} md={6} lg={5} >
        <h1 className={classes.heading}>Login</h1>
          <Paper className={classes.paperContainer}>
          <Form></Form>
          </Paper>
          </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Card);
