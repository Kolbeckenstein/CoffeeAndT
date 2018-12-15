import React, { Component } from 'react';
import {Grid, Typography, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import ImageMapper from 'react-image-mapper';

class MainImageGrid extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayDrawer: false
        }
    }

    map = {
        name: 'Test Map',
        areas: [
            { name: 'Alewife', shape: "circle", coords: [358, 115, 10] },
            { name: 'Davis', shape: "circle", coords: [392, 149, 10] },
            { name: 'Porter', shape: "circle", coords: [427, 185, 10] },
            { name: 'Harvard', shape: "circle", coords: [462, 220, 10] },
            { name: 'Central', shape: "circle", coords: [496, 254, 10] },
            { name: 'Kendal/MIT', shape: "circle", coords: [532, 289, 10] },
            { name: 'Charles/MGH', shape: "circle", coords: [573, 331, 10] },
            { name: 'Park', shape: "circle", coords: [601, 358, 10] },
            { name: 'Downtown Crossing', shape: "circle", coords: [770, 480, 10] },
        ]
    }


    358,115 - Alewife
392,149 - Davis
427,185 - Porter
462,220 - Harvard
496,254 - Central
532,289, Kendal/MIT
573,331, Charles/MGH
601,358, Park

    closeDrawer = () => {
        this.setState({displayDrawer: false})
    }

    render() {
        return(
        <div>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Typography variant="h2">CoffeeAndT!</Typography>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                        <ImageMapper
                            src={require('../img/mbtamap-1.png')}
                            map={this.map}
                            width={1200}
                            onMouseEnter={area => console.log(area.name)}
                            onClick={area => this.setState({displayDrawer: true})} />
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Grid>
            <Drawer anchor="right" open={this.state.displayDrawer} onClose={this.closeDrawer}>
                <div>
                    <List>
                        <ListItem>
                            <ListItemText primary={"CoffeeStuff"}/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
        );
    }
}

export default MainImageGrid