import React from "react";
import { useHistory } from "react-router-dom";

import { Box, Typography } from "@material-ui/core";

export default function OpportunityResult(props) {

    let history = useHistory();

    function goToOpportunity(opportunity) {
        history.push(`/opportunity/${opportunity._id}`)
    }

    return (
        <Box sx={{margin: "10px", width: "80vw", "background-color": "#C4C4C4", padding: "10px"}} onClick={() => goToOpportunity(props.opportunity)}>
            <Typography align="left">
                Job Title: {props.opportunity.title}
            </Typography>
            <Typography align="left">
                Company: {props.opportunity.company}
            </Typography>
            <Typography align="right">
                Date: {props.opportunity.date}
            </Typography>
        </Box>
    )
}