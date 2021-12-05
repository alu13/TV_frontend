import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FilterList as FilterIcon } from '@material-ui/icons';

const filters = ["Skills", "Duration", "Team Size"]

export default function FilterBar() {
    return (<Box sx = {{width: "15vw", height: "100vh", "background-color": "#C4C4C4", "padding-top": "10px"}}>
<Box sx={{display:"inline-flex"}}>
<FilterIcon></FilterIcon>
<Typography variant="h6">FILTER</Typography>
</Box>
{filters.map( filter => (<Typography>{filter}</Typography>))}
    </Box>)
}