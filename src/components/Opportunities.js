import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import { Box } from "@material-ui/core";
import { useParams } from "react-router";
import OpportunityResult from "./OpportunityResult";

export default function Opportunities() {

    const { query } = useParams();

    const [opportunities, setOpportunites] = useState([]);

    useEffect(() => {
        fetch("https://techvolunteersbackend.azurewebsites.net/search", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: query})
      }).then(res => res.json()).then(data => {
          setOpportunites(data);
    })}, [])

    return (<Box sx={{display: "flex"}}>
        <FilterBar/>
        <Box>
        {opportunities.map( opportunity => (<OpportunityResult opportunity={opportunity}/>))}
        </Box>
        </Box>)
}