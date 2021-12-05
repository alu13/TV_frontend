import { AppBar, Toolbar, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  Link
} from "react-router-dom";

const style = makeStyles({
  titleItemRight: {
    "margin-left": "auto",
  },
  toolBar: {
    "background-color": "#C4C4C4"
  }
});

export default function Header() {

  const classes = style();

  const headers = [
  {
    name: "Home",
    route: "/home"
  },
  {
    name:"Contact Us",
    route:"/contact"
  }]

  return (
      <AppBar className="flex" position="sticky">
          <Toolbar className="flex" classname={classes.toolBar}>
            CONNECTECH
            <div className={classes.titleItemRight}>
            {headers.map(header => 
            <Button component={Link} to={header.route}>
                {header.name}
            </Button>
            )}
            </div>
          </Toolbar>
      </AppBar>
  );
}