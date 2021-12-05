import React from 'react';
import {Box, Typography} from '@material-ui/core'

export default function HomeInfoCard(props) {
    return (
        <Box sx={{
            width: 400,
            height: 400,
            backgroundColor: '#C4C4C4'}} ml={4} mr={4} p={2} pl={2} pr={2}>
            <Typography variant="h5">
                {props.title}
            </Typography>
            <Typography align="justify">
            {props.text}
            </Typography>
        </Box>
    );
}