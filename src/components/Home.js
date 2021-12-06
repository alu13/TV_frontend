import React from "react";
import HomeInfoCard from "./HomeInfoCard";
import Search from "./Search";

import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core"
import {Link} from "react-router-dom"

const style = makeStyles({
    homeInfoCard: {
      "margin": "50px"
    },
    homeInfoCardSection: {
      "display": "flex",
      "justify-content":"center",
      "margin-top": "10px"
    },
    highlightButton: {
        "background-color": "#F1F500",
        "margin-top": "10px"
    },
    searchBar: {
        "width": "75vw",
        "margin-top":"10px"
    }
  });

export default function Home() {
    const classes = style();

    return (
    <div>
    <Search className={classes.searchBar}/>
    <div className={classes.homeInfoCardSection}>
    <HomeInfoCard className={classes.homeInfoCard} title="For students" text="Our platform connects students and student-led clubs on campus with organizations especially NGOs and small businesses that need assistance with various tasks related to volunteering, consulting, development and implementation of various technology etc. This allows students the chance to work with local businesses to gain experience in all spheres depending on what they want to do."/>
    <HomeInfoCard className={classes.homeInfoCard} title="For non-profits" text="Our platform connects students and student-led clubs on campus with local organizations that need assistance with various tasks to help grow their businesses and allow our students to gain industry experience."/>
    </div>
    <Button className={classes.highlightButton} mt={4} component={Link} to="/form">Are you a potential employer? Click here!</Button>
    </div>
    );
}