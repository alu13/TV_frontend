import React from "react";
import {Box} from "@material-ui/core"
import ContactCard from "./ContactCard";

export default function Contact() {

    const contactInfo = [
        {name: "Aashna", email: "adoshi45@gatech.edu"},
        {name: "Rhea", email:"rganguli7@gatech.edu"},
        {name: "Eleanor", email: "esim6@gatech.edu"},
        {name: "Dr. Harris"},
        {name: "Youngtak"},
        {name: "Ashwin"},
        {name: "Subha"},
        {name: "Albert"}
    ]

    return (
    <Box sx={{display: "flex",
    "flex-flow":"wrap" }}>
        {contactInfo.map(info => (<ContactCard name={info.name} email={info.email}/>))}
    </Box>
    );
}