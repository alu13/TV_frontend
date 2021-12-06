import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router";

const style = makeStyles({
    highlightButton: {
        "background-color": "#F1F500",
        "margin-left": "auto"
    },
    alignRight: {
        "margin-left": "auto"
    }
  });

export default function OpportunityDetails() {
    const classes = style();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(id);

    useEffect(() => {
        fetch("https://techvolunteersbackend.azurewebsites.net/searchById", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: id})
      }).then(res => res.json()).then(data => {
          setDetails(data[0]);
    })}, [])

    return (
        <Box sx={{"background-color":"#C4C4C4"}}>
            <Box sx={{display:"flex"}}>
            <Typography align="left">Job Title: {details.title}</Typography>
            <Typography className={classes.alignRight} align="right">{details.date}</Typography>
            </Box>
            <Typography align="left">Job Description: {details.description}</Typography>
            <Box sx={{display:"flex", "margin-top":"auto"}}>
            <Box>
            <Typography align="left">Organization Contact Information: {details.company}</Typography>
            </Box>
            <Button size="large" className={classes.highlightButton}><a href="https://docs.google.com/forms/d/e/1FAIpQLSdV_Np1hy2L7Wf5KPh5u-ITt4NQ_R8K2INYs0EIvDF48Ud-JQ/viewform">SIGN UP</a></Button>
            </Box>
        </Box>
    )
}