import { Typography, Avatar, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
    contactAvatar: {
        "height": "10vw",
        "width": "10vw"
    }
});


export default function ContactCard(props) {
    const classes = style()
    return (
    <Box sx={{
        width: "10vw",
        "margin-left": "11vw",
        "margin-right": "11vw",
        "margin-top":"2vh",
        display: "inline"}}>
        { props.image ? 
        <Avatar alt={props.name} src={props.image} variant="square" className={classes.contactAvatar}/> :
        <Avatar variant="square" className={classes.contactAvatar}> {props.name[0]} </Avatar>}

        <Typography align={props.email?"left":"center"} variant="h5">
        {props.name}
        </Typography>

        <Typography align="left" variant="body2">
        {props.email}
        </Typography>
    </Box>
    );
}