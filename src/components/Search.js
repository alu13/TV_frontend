import React from 'react';
import { TextField } from '@material-ui/core';
import { ContactPhoneOutlined, Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const style = makeStyles({
    searchBar: {
        "width": "75vw",
        "margin-top":"10px"
    },
    searchIcon: {
        "margin-top":"10px"
    }
  });


export default function Search() {

    let history = useHistory();

    function handleSearchInput(e) {
        if (e.key == "Enter") {
            goToSearchResults(e.target.value)
        }
    }

    function goToSearchResults(query) {
        history.push(`/opportunities/${query}`)
    }

    const classes = style();

    return (
        <div>
            <SearchIcon fontSize="large" className={classes.searchIcon} onClick={goToSearchResults}/>
            <TextField className={classes.searchBar} size="small" label="Search" variant="outlined" onKeyPress={handleSearchInput}></TextField>
        </div>
    );
}
