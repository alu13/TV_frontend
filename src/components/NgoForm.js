import React from "react";
import {
    Grid, 
    TextField, 
    Card,
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";

class NgoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            date: "",
            company: "",
            text: ""
        };
    }
    addOpportunity = () => {
        const {name, description, company, date} = this.state;
        if (name && description && company && date) {
            // Push to API here
            const opportunity = {title: name, date: date, description: description, company: company}
            fetch("https://techvolunteersbackend.azurewebsites.net/insert", {
                method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({opportunity: opportunity})
            }).then(res => {
                if (res.status == 200) {
                    this.setState({text: "Opportunity added!"})
                } else {
                    this.setState({text: "Error adding opportunity."})
                }
            })
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    render() {
        const { name, description, date, company, text } = this.state;
        return (
          <>
            <Grid
              style={styles.grid}
              container
              direction="column"
              justify="center"
              alignItems="center">
              <Card style={styles.card} elevation={10}>
                <Grid item style={styles.gridItem}>
                  <TextField
                    name="name"
                    required
                    style={styles.textField}
                    label="Opportunity Title"
                    placeholder="Enter opportunity title"
                    variant="outlined"
                    value={name}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <TextField
                    name="description"
                    required
                    style={styles.textField}
                    label="Description"
                    placeholder="Enter description"
                    variant="outlined"
                    value={description}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <TextField
                    name="company"
                    required
                    style={styles.textField}
                    label="Company Name"
                    placeholder="Enter company name"
                    variant="outlined"
                    value={company}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                <TextField
                    name="date"
                    required
                    style={styles.textField}
                    label="Date"
                    placeholder="Enter opportunity date"
                    variant="outlined"
                    value={date}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={styles.button}
                    onClick={this.addOpportunity}>
                    Submit
                  </Button>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <Typography variant="body2">
                      {text}
                  </Typography>
                </Grid>
              </Card>
            </Grid>
          </>
        );
    }
}
const styles = {
    header: {},
    grid: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    card: { padding: 40 },
    textField: { width: 300 },
    gridItem: { paddingTop: 12, paddingBottom: 12 },
    button: { width: 300 },
};

export default NgoForm;